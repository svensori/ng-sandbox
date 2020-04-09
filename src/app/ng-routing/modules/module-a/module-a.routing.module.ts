import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModACompAComponent } from './components/mod-a-comp-a/mod-a-comp-a.component';
import { ModACompACanDeactivateGuard } from './components/mod-a-comp-a/mod-a-comp-a.guard';
import { ModACompAModule } from './components/mod-a-comp-a/mod-a-comp-a.module';

const routes: Routes = [
  {
    path: 'comp-a',
    component: ModACompAComponent,
    canDeactivate: [ModACompACanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    ModACompAModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ModuleARoutingModule {}
