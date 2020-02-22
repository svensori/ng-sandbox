import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosPageComponent } from './akita/components/todos-page.component';
import { NgFormComponent } from './ng-form/ng-form.component';

const routes: Routes = [
  {
    path: 'ng-form',
    component: NgFormComponent
  },
  {
    path: 'akita',
    component: TodosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
