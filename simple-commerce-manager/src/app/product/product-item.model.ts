import { Product, ProdStatus } from "./product.model";

export interface ProductItem extends Product{
  itemId: number;
  optionName: string;
  quantity: number;
  itemStatus: ProdStatus;
}
