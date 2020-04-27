import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, first } from 'rxjs/operators';

import { Message } from './interface/message';
import { MessageSocketService } from './sockets/message-socket.service';

@Component({
  selector: 'app-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.scss']
})
export class SocketIoComponent implements OnInit {

  messages: Message[] = [];
  message = '';
  userNumber: number;
  inputControl: FormControl;

  constructor(
    private messageSocket: MessageSocketService
  ) { }

  ngOnInit() {
    this.inputControl = new FormControl('');
    this.startReceivingMessage();
    this.messageSocket.getUserNumber()
      .pipe(first())
      .subscribe(
        data => this.userNumber = data,
        error => console.log('Please start the socket-io server by running: npm run start:socket-io')
      );
  }

  sendMessage() {
    const message: Message = {
      senderName: `Client ${this.userNumber}`,
      content: this.inputControl.value
    };
    this.messageSocket.sendMessage(message);
    this.inputControl.reset();
  }

  startReceivingMessage() {
    this.messageSocket.recieveMessage()
      .subscribe(message => {
        this.messages.push(message);
      });
  }
}
