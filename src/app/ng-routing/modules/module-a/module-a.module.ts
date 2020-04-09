import { NgModule } from '@angular/core';

import { ModuleAComponent } from './module-a.component';
import { ModuleARoutingModule } from './module-a.routing.module';

@NgModule({
  imports: [ModuleARoutingModule],
  declarations: [ModuleAComponent],
  exports: [ModuleAComponent],
  entryComponents: [ModuleAComponent]
})
export class ModuleA {}
