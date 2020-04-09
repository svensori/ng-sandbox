import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgRoutingComponent } from './ng-routing.component';
import { NgRoutingRoutingModule } from './ng-routing.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgRoutingRoutingModule
  ],
  declarations: [NgRoutingComponent]
})
export class NgRoutingModule { }
