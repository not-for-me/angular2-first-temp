import { ScmBaseModel } from "../shared/scm-base.model";
import { ScmSharedUtil } from "../shared/shared-util";
export enum ProdStatus {
  WAIT_FOR_SALE,
  ON_SALE,
  SOLD_OUT,
  NOT_FOR_SALE
}

export declare type Products = Product[];

export class Product extends ScmBaseModel {
  $key?: string;
  id: number;
  name: string;
  listPrice: number;
  status: ProdStatus;
  qty: number;
  desc?: string;
  catId?: number;
  couponId?: number;


  constructor(id: number, status: ProdStatus) {
    super(true, ScmSharedUtil.getCurrentDateTime(), '');
    this.id = id;
    this.name = '';
    this.listPrice = 0;
    this.status = status;
    this.qty = 0;
    this.desc = '';
    this.catId = 0;
    this.couponId = 0;
  }

  static getNewForUpdate(other: Product) {
    return {
      id: other.id,
      name: other.name,
      listPrice: other.listPrice,
      status: other.status,
      qty: other.qty,
      desc: other.desc,
      catId: other.catId,
      couponId: other.couponId,
      isUse: other.isUse,
      createdTime: other.createdTime,
      updatedTime: ScmSharedUtil.getCurrentDateTime()
    };
  }
}
