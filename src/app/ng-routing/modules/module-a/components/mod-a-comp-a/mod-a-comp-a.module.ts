import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModACompAComponent } from './mod-a-comp-a.component';
import { ModACompACanDeactivateGuard } from './mod-a-comp-a.guard';

@NgModule({
  declarations: [ModACompAComponent],
  imports: [RouterModule],
  exports: [ModACompAComponent],
  providers: [ModACompACanDeactivateGuard]
})
export class ModACompAModule {}
