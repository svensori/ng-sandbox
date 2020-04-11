import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosPageComponent } from './components/todos-page.component';

const routes: Routes = [
  { path: '', component: TodosPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkitaRoutingModule {}
