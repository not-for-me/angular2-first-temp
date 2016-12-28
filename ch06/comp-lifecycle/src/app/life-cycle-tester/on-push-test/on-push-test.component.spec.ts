/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnPushTestComponent } from './on-push-test.component';

describe('OnPushTestComponent', () => {
  let component: OnPushTestComponent;
  let fixture: ComponentFixture<OnPushTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
