import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgRoutingComponent } from './routing-demo.component';

const routes: Routes = [
  {
    path: 'mod-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleA)
  },
  {
    path: '',
    component: NgRoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRoutingRoutingModule {}
