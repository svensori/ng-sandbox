import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosPageComponent } from './akita/components/todos-page.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { CustomOperatorModule } from './custom-rxjs-operators/custom-operator.module';
import { CustomOperatorComponent } from './custom-rxjs-operators/custom-operator.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
