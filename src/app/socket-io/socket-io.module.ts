import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SocketIoComponent } from './socket-io.component';
import { SocketIoRoutes } from './socket-io.routing';
import { MessageSocketService } from './sockets/message-socket.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoRoutes
  ],
  declarations: [SocketIoComponent],
  providers: [MessageSocketService]
})
export class SocketIoModule { }
