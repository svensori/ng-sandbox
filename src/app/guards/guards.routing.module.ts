import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateDemoComponent } from './components/can-activate-demo/can-activate-demo.component';
import { CanActivateDemoGuard } from './components/can-activate-demo/can-activate-loader.guard';
import { CanDeactivateDemoComponent } from './components/can-deactivate-demo/can-deactivate-demo.component';
import { CanDeactivateDemoGuard } from './components/can-deactivate-demo/can-deactivate-loader.guard';
import { GuardsComponent } from './guards.component';

const routes: Routes = [
  {
    path: '',
    component: GuardsComponent
  },
  {
    path: 'can-deactivate-demo',
    component: CanDeactivateDemoComponent,
    canDeactivate: [CanDeactivateDemoGuard]
  },
  {
    path: 'can-activate-demo',
    component: CanActivateDemoComponent,
    canActivate: [CanActivateDemoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateDemoGuard,
    CanDeactivateDemoGuard
  ]
})
export class GuardsRoutingModule {}
