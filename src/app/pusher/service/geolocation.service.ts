import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  watchPosition(callback) {
    return navigator.geolocation.watchPosition(callback);
  }
}
