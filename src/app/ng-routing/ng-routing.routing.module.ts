import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleAComponent } from './modules/module-a/module-a.component';

const routes: Routes = [
  {
    path: 'mod-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleA)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRoutingRoutingModule {}
