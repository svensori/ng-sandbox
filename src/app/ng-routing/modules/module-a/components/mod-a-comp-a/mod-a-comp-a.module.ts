import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ModACompAComponent } from './mod-a-comp-a.component';

@NgModule({
  declarations: [ModACompAComponent],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [ModACompAComponent],
})
export class ModACompAModule {}
