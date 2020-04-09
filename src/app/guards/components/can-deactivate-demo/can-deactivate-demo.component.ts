import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { DialogResult } from '../../interface/dialog-result';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-can-deactivate-demo',
  templateUrl: './can-deactivate-demo.component.html',
  styleUrls: ['./can-deactivate-demo.component.scss']
})
export class CanDeactivateDemoComponent implements OnInit {

  private prvtCanDeactivate = new BehaviorSubject(false);

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.routeBack();
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

  canDeactivate() {
    return this.prvtCanDeactivate;
  }

  routeBack() {
    const dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed()
      .subscribe(result => {
        if (result === DialogResult.YES) {
          this.prvtCanDeactivate.next(true);
          this.router.navigate(['..'], {relativeTo: this.activatedRoute});
        }
      });
  }
}
