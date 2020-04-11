import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgRoutingComponent } from './routing-demo.component';
import { NgRoutingRoutingModule } from './routing-demo.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    NgRoutingRoutingModule
  ],
  declarations: [NgRoutingComponent],
  entryComponents: [NgRoutingComponent]
})
export class RoutingDemo { }
