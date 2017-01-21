/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromotionManagementComponent } from './promotion-management.component';

describe('PromotionManagementComponent', () => {
  let component: PromotionManagementComponent;
  let fixture: ComponentFixture<PromotionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
