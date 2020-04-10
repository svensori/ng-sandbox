import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { LearningsModule } from 'src/shared/learnings.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    BrowserModule,
    LearningsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

