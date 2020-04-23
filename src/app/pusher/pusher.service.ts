import { Injectable } from '@angular/core';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  channel;

  constructor() {
    const pusher = new Pusher('ae76d17749f7d459a7ef', {
      cluster: 'ap1',
    });
    this.channel = pusher.subscribe('location');
  }

  public init() {
    return this.channel;
  }
}
