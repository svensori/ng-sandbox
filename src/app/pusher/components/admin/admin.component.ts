import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

import { PusherService } from '../../pusher.service';

declare const google;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(
    private loader: MapsAPILoader,
    private pusher: PusherService
  ) { }

  theRanchPolygon;

  username = 'Admin';
  message = '';
  showAlert = false;
  showLocationUpdate = false;
  zoom = 15;
  // Center of the office, where the initial marker will be placed
  center = {
    lat: 14.550057,
    lng: 121.046807,
  };
  // This array of latLngs represents the polygon around the office
  polygon = [
    { lat: 14.549963, lng: 121.047221 },
    { lat: 14.550288, lng: 121.046974 },
    { lat: 14.549969, lng: 121.046507 },
    { lat: 14.549634, lng: 121.046773 },
    { lat: 14.549963, lng: 121.047221 },
  ];

  ngOnInit() {
    // Wait for the google maps script to be loaded before using the "google" keyword
    this.loader.load().then(() => {
      this.theRanchPolygon = new google.maps.Polygon({ paths: this.polygon });
    });
    const channel = this.pusher.init();
    channel.bind('ping', (position) => {
      this.center = {
        ...position,
      };
      // Create a LatLng using the position returned from the pusher event
      const latLng = new google.maps.LatLng(position);
      this.showLocationUpdate = true;
      this.message = `The user's location has changed`;
      // Check if the location is outside the polygon
      console.log(!google.maps.geometry.poly.containsLocation(latLng, this.theRanchPolygon));

      if (!google.maps.geometry.poly.containsLocation(latLng, this.theRanchPolygon)) {
        // Show alert if user has left the polygon
        this.showAlert = true;
      } else {
        this.message = 'The user is currently in the ranch';
      }
    });
  }
}
