import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CouponService } from "../../coupon.service";
import { Coupon } from "../../coupon.model";

import {Observable} from "rxjs/Observable";

@Injectable()
export class CouponDetailResolverService implements Resolve<Coupon> {

  constructor(private couponService: CouponService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Coupon> {
    const action = route.queryParams['action'];
    if (action === 'create') {
      return this.couponService.create();
    }

    const key = route.queryParams['key'];

    return this.couponService
      .get(key)
      .map(coupon => {
        if (coupon) {
          return coupon;
        }

        this.router.navigate(['/coupon-list']);
        return null;
      });
  }

}
