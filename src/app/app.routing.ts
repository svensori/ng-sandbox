import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosPageComponent } from './akita/components/todos-page.component';
import { CustomOperatorComponent } from './custom-rxjs-operators/custom-operator.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgRoutingComponent } from './ng-routing/ng-routing.component';

const routes: Routes = [
  {
    path: 'ng-form',
    component: NgFormComponent
  },
  {
    path: 'akita',
    component: TodosPageComponent
  },
  {
    path: 'custom-rxjs-operator',
    component: CustomOperatorComponent
  },
  {
    path: 'ng-routing',
    loadChildren: () => import('./ng-routing/ng-routing.module').then(m => m.NgRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
