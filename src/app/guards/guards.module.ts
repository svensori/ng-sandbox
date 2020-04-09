import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { CanActivateDemoComponent } from './components/can-activate-demo/can-activate-demo.component';
import { CanDeactivateDemoComponent } from './components/can-deactivate-demo/can-deactivate-demo.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { GuardsComponent } from './guards.component';
import { GuardsRoutingModule } from './guards.routing.module';


@NgModule({
  declarations: [
    GuardsComponent,
    CanActivateDemoComponent,
    CanDeactivateDemoComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    GuardsRoutingModule
  ]
})
export class GuardsModule { }
