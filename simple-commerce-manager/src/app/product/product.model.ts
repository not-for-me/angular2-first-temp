export enum ProdStatus {
  WAIT_FOR_SALE,
  ON_SALE,
  SOLD_OUT,
  TEMPORARY_STOP_SALE,
  NOT_SALE
}

// export declare type ProdStatus = 'WAIT' | 'SALE' | 'SOLD_OUT' | 'TEMP_STOP' | 'NOT_SALE';

export declare type Products = Product[];

export interface Product {
  $key?: string;
  id: number;
  name: string;
  listPrice: number;
  status: ProdStatus;
  options?: string[];
  desc?: string;
  catId?: number;
  couponId?: number;
  createdDate: string;
  updateDate: string;
}
