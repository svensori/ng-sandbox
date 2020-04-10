import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mod-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleA)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRoutingRoutingModule {}