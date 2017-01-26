import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponManagementComponent } from "./coupon-management/coupon-management.component";
import { CouponListComponent } from "./coupon-management/coupon-list/coupon-list.component";
import { CouponListResolverService } from "./coupon-management/coupon-list/coupon-list-resolver.service";
import { CouponDetailComponent } from "./coupon-management/coupon-detail/coupon-detail.component";
import { CouponDetailResolverService } from "./coupon-management/coupon-detail/coupon-detail-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: CouponManagementComponent,
    children: [
      {path: '', pathMatch: 'full', resolve: {listData: CouponListResolverService}, component: CouponListComponent},
      {path: 'coupon', resolve: {coupon: CouponDetailResolverService}, component: CouponDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponRoutingModule { }
