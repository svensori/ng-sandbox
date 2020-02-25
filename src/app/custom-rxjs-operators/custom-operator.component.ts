import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { BaseUi } from 'src/shared/models/ui.model';

import { debug } from './custom-operators/debug';
import { filterNilChoosy } from './custom-operators/filter-nil';

@Component({
  selector: 'app-custom-operator',
  templateUrl: './custom-operator.component.html',
  styleUrls: ['./custom-operator.component.scss']
})
export class CustomOperatorComponent implements OnInit, OnDestroy {

  ui = {
    title: 'RxJS Custom Operators'
  } as BaseUi;

  numStream = of(undefined, 1, 2 , null, 4);
  private numStream$: Subscription;

  constructor() { }

  ngOnInit() {
    this.numStream.pipe(
      filterNilChoosy([1]),
      debug('numStream')
    ).subscribe(data => {});
  }

  ngOnDestroy(): void {
    this.numStream$.unsubscribe();
    console.log('destroyed');
  }
}
