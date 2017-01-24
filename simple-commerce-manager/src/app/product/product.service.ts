import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { Products, Product, ProdStatus } from "./product.model";
import { FirebaseIdGeneratorService } from "../shared/firebase-id-generator.service";
import { createCompilerOptions } from "tslint";

@Injectable()
export class ProductService {
  private _products$: FirebaseListObservable<Products>;

  constructor(private af: AngularFire, private idService: FirebaseIdGeneratorService) {
    this._products$ = this.af.database.list('/products');
  }

  getProducts(pageSize, pageNo) {
    const offset = pageSize * (pageNo - 1) + 1;

    const opt = {
      query: {
        orderByChild: 'id',
        startAt: offset,
        limitToFirst: pageSize
      }
    };
    return this.af.database.list('/products', opt);
  }

  getProduct(prodId: number) {
    const opt = {
      query: {
        orderByChild: 'id',
        equalTo: prodId,
      }
    };

    return this.af.database
      .list('products', opt)
      .map(prods => prods[0])
      .take(1);
  }

  create(product): Observable<Product> {
    return this.idService.getNewId('product')
      .map(newId => ({id: newId, status: ProdStatus.WAIT_FOR_SALE}))
      .map(newProd => this._products$.push(newProd).key)
      .switchMap(key => this.af.database.object('/products/' + key).take(1));
  }

  modifyProduct(product: Product) {
    const _key = product.$key;
    const modifiedProd = {
      id: product.id,
      name: product.name,
      listPrice: product.listPrice,
      status: product.status,
      // options: product.options,
      desc: product.desc,
      // catId: product.catId,
      // couponId: product.couponId
    };
    return this._products$.update(_key, modifiedProd);
  }

  getCount() {
    return this._products$.map(prods => prods.length);
  }
}
