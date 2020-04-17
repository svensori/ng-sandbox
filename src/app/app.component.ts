import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOperatorModule } from './custom-rxjs-operators/custom-operator.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routes = this.router.config;
  console = console;

  constructor(private router: Router) {
    this.console.log(this.routes);
  }
}
