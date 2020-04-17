import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { DialogResult } from '../../interface/dialog-result';
import { DialogComponent } from '../dialog/dialog.component';
import { CanDeactivateDemoComponent } from './can-deactivate-demo.component';

@Injectable()
export class CanDeactivateDemoGuard implements CanDeactivate<CanDeactivateDemoComponent> {

  private prvtCanDeactivate = new Subject<boolean>();

  constructor(private dialog: MatDialog) { }

  canDeactivate(
    component: CanDeactivateDemoComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed()
      .subscribe(result => {
        if (result === DialogResult.YES) {
          this.prvtCanDeactivate.next(true);
        }
      });

    return this.prvtCanDeactivate;
  }
}
