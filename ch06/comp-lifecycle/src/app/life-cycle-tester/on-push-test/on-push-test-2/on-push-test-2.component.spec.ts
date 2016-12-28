/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnPushTest2Component } from './on-push-test-2.component';

describe('OnPushTest2Component', () => {
  let component: OnPushTest2Component;
  let fixture: ComponentFixture<OnPushTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
