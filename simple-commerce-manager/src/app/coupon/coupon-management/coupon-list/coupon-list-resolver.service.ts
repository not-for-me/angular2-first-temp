import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CouponService } from "../../coupon.service";
import { COUPON_LIST_PAGE_SIZE } from "../../coupon.tokens";

import { Observable } from 'rxjs/Observable';
import { Coupons } from "../../coupon.model";

@Injectable()
export class CouponListResolverService implements Resolve<any> {

  constructor(private couponService: CouponService, @Inject(COUPON_LIST_PAGE_SIZE) private pageSize) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.couponService.count()
      .switchMap(cnt => {
        const count$ = Observable.of(cnt);
        const sortedProducts$ = this.couponService.getListByDesc(1, this.pageSize, cnt)
          .map((list: Coupons) => list.sort((p1, p2) => p2.id - p1.id));

        return Observable.zip(count$, sortedProducts$, (cnt: number, list: Coupons) => ({cnt, list}));
      }).take(1);
  }

}
