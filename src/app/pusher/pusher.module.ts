import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { PusherComponent } from './pusher.component';
import { PusherRoutes } from './pusher.routing';
import { GeolocationService } from './service/geolocation.service';
import { PusherService } from './service/pusher.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PusherRoutes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6C4chhrR2SyusPKruPil7m-CKl3U4UeI',
      libraries: ['geometry']
    })
  ],
  declarations: [
    PusherComponent,
    AdminComponent,
    HomeComponent
  ],
  providers: [
    PusherService,
    GeolocationService
  ]
})
export class PusherModule { }
