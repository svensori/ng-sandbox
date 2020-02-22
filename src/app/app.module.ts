import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from 'src/shared/app-material.module';

import { AkitaModule } from './akita/akita.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NgFormComponent } from './ng-form/ng-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgFormComponent
  ],
  imports: [
    AkitaModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
