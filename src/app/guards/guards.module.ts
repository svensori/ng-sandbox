import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatToolbarModule,
    MatButtonModule,
    GuardsRoutingModule
  ]
})
export class GuardsModule { }
