import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  private prvtChannel: PusherTypes.Channel;

  constructor() {
    Pusher.logToConsole = true;

    const pusher = new Pusher('ae76d17749f7d459a7ef', {
      cluster: 'ap1',
      forceTLS: true
    });

    this.prvtChannel = pusher.subscribe('my-channel');
  }

  get channel() {
    return this.prvtChannel;
  }
}
