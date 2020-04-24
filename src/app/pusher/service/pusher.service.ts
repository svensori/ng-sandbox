import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private prvtChannel: PusherTypes.Channel;

  constructor() {
    Pusher.logToConsole = true;

    const pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: true
    });

    this.prvtChannel = pusher.subscribe('my-channel');
  }

  get channel() {
    return this.prvtChannel;
  }
}
