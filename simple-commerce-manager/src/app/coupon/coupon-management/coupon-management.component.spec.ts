/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CouponManagementComponent } from './coupon-management.component';

describe('CouponManagementComponent', () => {
  let component: CouponManagementComponent;
  let fixture: ComponentFixture<CouponManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
