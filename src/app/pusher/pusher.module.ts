import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PusherComponent } from './pusher.component';
import { PusherRoutes } from './pusher.routing.module';
import { PusherService } from './pusher.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PusherRoutes,
    AgmCoreModule.forRoot({
      // please get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB6C4chhrR2SyusPKruPil7m-CKl3U4UeI',
      libraries: ['geometry']
    })
  ],
  declarations: [
    PusherComponent,
    AdminComponent,
    HeaderComponent,
    HomeComponent
  ],
  providers: [PusherService]
})
export class PusherModule { }
