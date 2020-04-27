import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Message } from './interface/message';
import { MessageSocketService } from './sockets/message-socket.service';

@Component({
  selector: 'app-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.scss']
})
export class SocketIoComponent implements OnInit, OnDestroy {

  messages: Message[] = [];
  message = '';
  userNumber: number;
  inputControl: FormControl;

  private subscription = new Subscription();

  constructor(
    private messageSocket: MessageSocketService
  ) { }

  ngOnInit() {
    this.inputControl = new FormControl('');
    this.startReceivingMessage();
    this.getUserNumber();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendMessage() {
    const message: Message = {
      senderName: `Client ${this.userNumber}`,
      content: this.inputControl.value
    };
    this.messageSocket.sendMessage(message);
    this.inputControl.reset();
  }

  private startReceivingMessage() {
    const receiveMessage$ = this.messageSocket.recieveMessage()
      .subscribe(message => {
        this.messages.push(message);
      });
    this.subscription.add(receiveMessage$);
  }

  private getUserNumber() {
    return this.messageSocket.getUserNumber()
      .pipe(first())
      .subscribe(
        data => this.userNumber = data,
        error => console.log('Please start the socket-io server by running: npm run start:socket-io')
      );
  }
}
