import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModACompAComponent } from './mod-a-comp-a.component';

@NgModule({
  declarations: [ModACompAComponent],
  imports: [RouterModule],
  exports: [ModACompAComponent],
})
export class ModACompAModule {}
