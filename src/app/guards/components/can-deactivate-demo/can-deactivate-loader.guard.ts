import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CanDeactivateDemoComponent } from './can-deactivate-demo.component';

@Injectable()
export class CanDeactivateDemoGuard implements CanDeactivate<CanDeactivateDemoComponent> {

  constructor() { }

  canDeactivate(
    component: CanDeactivateDemoComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
