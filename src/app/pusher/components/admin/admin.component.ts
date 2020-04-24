import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

import { Position } from '../../interface/position';
import { PusherService } from '../../service/pusher.service';
import { OFFICE_LATITUDE, OFFICE_LONGITUDE, OFFICE_POLYGON } from './constant/google-map';
import { LOCATION_STATE } from './constant/location-state';

declare const google;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  readonly lat = OFFICE_LATITUDE;
  readonly lng = OFFICE_LONGITUDE;
  readonly paths = OFFICE_POLYGON;

  areaPolygon;
  message: string;
  latLng: any;
  markerLat: number;
  markerLng: number;

  constructor(
    private mapLoader: MapsAPILoader,
    private pusherService: PusherService
  ) { }

  ngOnInit() {
    this.loadGoogleMap();
    this.listenToPusherEvent(this.onPositionChange.bind(this));
  }

  get onPremise() {
    const onPrem = google.maps.geometry.poly.containsLocation(this.latLng, this.areaPolygon) ||
                   google.maps.geometry.poly.isLocationOnEdge(this.latLng, this.areaPolygon);
    return onPrem;
  }

  private listenToPusherEvent(callback) {
    this.pusherService.channel.bind('my-event', callback);
  }

  private onPositionChange(position: Position) {
    this.updateMarkerPosition(position);
    this.latLng = new google.maps.LatLng(position.lat, position.lng);
    this.message = this.onPremise ? LOCATION_STATE.INBOUND : LOCATION_STATE.OUTBOUND;
  }

  private loadGoogleMap() {
    this.mapLoader.load()
      .then(() => {
        this.areaPolygon = new google.maps.Polygon({paths: OFFICE_POLYGON});
      });
  }

  private updateMarkerPosition(position: Position) {
    this.markerLat = position.lat;
    this.markerLng = position.lng;
  }
}
