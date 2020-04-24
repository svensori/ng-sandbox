import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Position } from '../../interface/position';
import { GeolocationService } from '../../service/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  positionHistory: Position[] = [];

  constructor(
    private http: HttpClient,
    private geoLocation: GeolocationService
  ) { }

  ngOnInit() {
    this.geoLocation.watchPosition(this.sendPositionUpdates.bind(this));
  }

  private sendPositionUpdates(position) {
    const payload: Position = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    this.http.post('http://localhost:4000/ping', payload)
      .subscribe((res) => {
        this.positionHistory.push(payload);
        console.log('position', res);
      });
  }
}
