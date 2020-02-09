import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'src/shared/app-material.module';

import { AppComponent } from './app.component';
import { NgFormComponent } from './ng-form/ng-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
