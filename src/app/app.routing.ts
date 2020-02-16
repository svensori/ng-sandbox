import { Routes, RouterModule } from '@angular/router';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'ng-form',
    component: NgFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
