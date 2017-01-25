import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';
import { CouponService } from './coupon.service';
import { CouponListComponent } from './coupon-management/coupon-list/coupon-list.component';
import { CouponListResolverService } from './coupon-management/coupon-list/coupon-list-resolver.service';
import { COUPON_LIST_PAGE_SIZE } from "./coupon.tokens";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CouponRoutingModule } from "./coupon-routing.module";
import { CouponDetailComponent } from './coupon-management/coupon-detail/coupon-detail.component';
import { CouponDetailResolverService } from './coupon-management/coupon-detail/coupon-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CouponRoutingModule
  ],
  exports: [CouponManagementComponent],
  declarations: [CouponManagementComponent, CouponListComponent, CouponDetailComponent],
  providers: [
    CouponService,
    CouponListResolverService,
    CouponDetailResolverService,
    {provide: COUPON_LIST_PAGE_SIZE, useValue: 5},
  ]
})
export class CouponModule { }
