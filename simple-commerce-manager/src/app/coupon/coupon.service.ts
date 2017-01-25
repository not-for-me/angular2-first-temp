import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { IdGenService } from "../shared/id-gen.service";
import { Coupons, Coupon } from "./coupon.model";
import { ItemPagingService } from "../shared/item-paging.service";

@Injectable()
export class CouponService extends ItemPagingService<Coupons> {
  private _coupons$: FirebaseListObservable<Coupons>;

  constructor(private af: AngularFire,
              private idGenService: IdGenService) {
    super();
    this._coupons$ = af.database.list('/coupons');
  }

  create() {
    return this.idGenService.update('coupon')
      .map((id) => this._coupons$.push(new Coupon(id)).key)
      .switchMap($key => this.af.database.object(`/coupons/${$key}`).take(1));
  }

  get(key: string) {
    return this.af.database.object(`/coupons/${key}`);
  }

  getStream(option) {
    return this.af.database.list('/coupons', option);
  }

  update(coupon: Coupon) {
    const modifiedCoupon = Coupon.getNewForUpdate(coupon);
    return this._coupons$.update(coupon.$key, modifiedCoupon);
  }

  count() {
    return this.idGenService.get('coupon');
  }
}
