import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ModuleAComponent } from './module-a.component';
import { ModuleARoutingModule } from './module-a.routing.module';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    ModuleARoutingModule
  ],
  declarations: [ModuleAComponent],
  exports: [ModuleAComponent],
  entryComponents: [ModuleAComponent]
})
export class ModuleA {}
