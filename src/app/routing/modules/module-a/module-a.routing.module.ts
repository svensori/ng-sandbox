import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModACompAComponent } from './components/mod-a-comp-a/mod-a-comp-a.component';
import { ModACompAModule } from './components/mod-a-comp-a/mod-a-comp-a.module';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
  {
    path: 'comp-a',
    component: ModACompAComponent,
  },
  {
    path: '',
    component: ModuleAComponent
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
