import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomOperatorComponent } from './custom-operator.component';
import { CustomOperatorRoutingModule } from './custom-operator.routing.module';

@NgModule({
  declarations: [CustomOperatorComponent],
  imports: [
    MatToolbarModule,
    CustomOperatorRoutingModule
  ],
  exports: [CustomOperatorComponent]
})
export class CustomOperatorModule { }
