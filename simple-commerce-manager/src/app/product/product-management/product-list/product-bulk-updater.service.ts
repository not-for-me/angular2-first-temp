import { Injectable } from '@angular/core';
import { ProductService, BulkUpdateResult } from "../../product.service";
import { CheckedProdDataService } from "../checked-prod-data.service";
import { Product, ProdStatus } from "../../product.model";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductBulkUpdaterService {

  constructor(private prodService: ProductService, private cps: CheckedProdDataService) {
  }

  updateProductsCoupon(couponId: number) {
    const modifyCoupon = (prod: Product) => {
      prod.couponId = couponId;
      return prod;
    };

    const curKeys = this.cps.checkedProductKeys;

    const update$ = this.cps.keys$()
      .mergeMap(key => this.prodService.get(key))
      .do(modifyCoupon)
      .mergeMap(prod => this.prodService.update(prod));

    return this.handleBulkUpdate$(update$);
  }

  updateProductsToSell() {
    return this.updateStatus(ProdStatus.ON_SALE);
  }

  updateProductsToStop() {
    return this.updateStatus(ProdStatus.NOT_FOR_SALE);
  }

  private updateStatus(status: ProdStatus) {
    const modifyProductStatus = (prod: Product) => {
      prod.status = status;
      return prod;
    };

    const curKeys = this.cps.checkedProductKeys;

    return this.cps.keys$()
      .mergeMap(key => this.prodService.get(key))
      .do(modifyProductStatus)
      .mergeMap(prodForSale => this.prodService.update(prodForSale))
      .reduce((acc, r: BulkUpdateResult) => {
        if (r[0]) {
          acc.success.push(r[1])
        } else {
          acc.fail.push(r[1]);
        }
        return acc;
      }, {success: [], fail: []})
      .do(result => {
        if (result.fail.length > 0) {
          throw new Error(`${result.fail.join(', ')}`);
        }
      })
      .map(result => result.success);
  }

  private handleBulkUpdate$(update$: Observable<BulkUpdateResult>) {
    return update$.reduce((acc, r: BulkUpdateResult) => {
      if (r[0]) {
        acc.success.push(r[1])
      } else {
        acc.fail.push(r[1]);
      }
      return acc;
    }, {success: [], fail: []})
      .do(result => {
        if (result.fail.length > 0) {
          throw new Error(`${result.fail.join(', ')}`);
        }
      })
      .map(result => result.success);
  }


}
