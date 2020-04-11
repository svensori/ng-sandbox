import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomOperatorComponent } from './custom-operator.component';

const routes: Routes = [
  {
    path: '',
    component: CustomOperatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomOperatorRoutingModule {}
