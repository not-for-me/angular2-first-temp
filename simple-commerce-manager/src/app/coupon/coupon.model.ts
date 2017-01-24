
export declare type DiscountType = 'rate' | 'amount';

export interface Coupon {
  id: number;
  name: string;
  desc: string;
  discountType: DiscountType;
  offset: number;
  prodIds: number[];
  startDate: string;
  endDate: string;
  isUse: boolean;
}
