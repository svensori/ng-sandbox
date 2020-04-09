import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ModACompAComponent } from './mod-a-comp-a.component';

@Injectable()
export class ModACompACanDeactivateGuard implements CanDeactivate<ModACompAComponent> {
  canDeactivate(
    component: ModACompAComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.canDeactivate) {
      return component.canDeactivate();
    }
    return true;
  }
}
