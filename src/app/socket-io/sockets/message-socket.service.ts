import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Message } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class MessageSocketService extends Socket {

  constructor(
    private http: HttpClient
  ) {
    super(environment.socketIoConfig);
  }

  sendMessage(message: Message) {
    this.emit('message-event', message);
  }

  recieveMessage(): Observable<Message> {
    return this.fromEvent('message-event');
  }

  getUserNumber(): Observable<any> {
    return this.http.get<{userNumber: number}>(`${environment.socketIoConfig.url}/userNumber`)
      .pipe(map(data => data.userNumber));
  }
}
