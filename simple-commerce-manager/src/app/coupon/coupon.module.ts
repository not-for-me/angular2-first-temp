import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CouponManagementComponent],
  declarations: [CouponManagementComponent]
})
export class CouponModule { }
