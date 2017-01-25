import * as moment from 'moment';
import { ScmBaseModel } from "../shared/scm-base.model";
import { ScmSharedUtil } from "../shared/shared-util";

export declare type Coupons = Coupon[];
export declare type CouponType = 'NOT_SET' | 'RATE' | 'AMOUNT';
export class Coupon extends ScmBaseModel {
  $key: string;
  id: number;
  name: string;
  type: CouponType;
  offset: number;
  prodIds: number[];
  startDate: string;
  endDate: string;

  constructor(id: number) {
    super(true, ScmSharedUtil.getCurrentDate(), '');

    this.id = id;
    this.name = '';
    this.type = 'NOT_SET';
    this.offset = 0;
    this.prodIds = [];
    this.startDate = '';
    this.endDate = '';
  }

  static getNewForUpdate(other: Coupon) {
    return {
      name: other.name,
      type: other.type,
      offset: other.offset,
      prodIds: other.prodIds,
      startDate: other.startDate,
      endDate: other.endDate,
      isUse: other.isUse,
      updatedDate: ScmSharedUtil.getCurrentDate()
    };
  }
}

