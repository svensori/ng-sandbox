/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModACompAComponent } from './mod-a-comp-a.component';

describe('ModACompAComponent', () => {
  let component: ModACompAComponent;
  let fixture: ComponentFixture<ModACompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModACompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModACompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
