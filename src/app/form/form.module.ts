import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormDemoComponent } from './form.component';
import { FormDemoRoutingModule } from './form.routing.module';

@NgModule({
  declarations: [FormDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FormDemoRoutingModule
  ],
  exports: [FormDemoComponent]
})
export class FormDemoModule { }
