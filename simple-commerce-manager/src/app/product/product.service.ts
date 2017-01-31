import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { Products, Product, ProdStatus } from "./product.model";
import { IdGenService } from "../shared/id-gen.service";
import { ItemPagingService } from "../shared/item-paging.service";

export declare type UpdateResult = [boolean, number];

@Injectable()
export class ProductService extends ItemPagingService<Products> {
  private _products$: FirebaseListObservable<Products>;

  constructor(private af: AngularFire, private idGenService: IdGenService) {
    super();
    this._products$ = af.database.list('/products');
  }

  create(product): Observable<Product> {
    return this.idGenService.update('product')
      .map((id) => this._products$.push(new Product(id, ProdStatus.WAIT_FOR_SALE)).key)
      .do(k => console.log('after create: ' + k))
      .switchMap($key => this.af.database.object(`/products/${$key}`).take(1));
  }

  get(key: string) {
    return this.af.database.object(`/products/${key}`).take(1);
  }

  getById(id: number) {
    return this.af.database.list(`/products`, {query: {orderByChild: 'id', equalTo: id}})
      .take(1)
      .map(result => result[0]);
  }

  getByStatus(status: ProdStatus) {
    return this.af.database.list(`/products`, {query: {orderByChild: 'status', equalTo: status}})
      .take(1);
  }

  getStream(option) {
    return this.af.database.list('/products', option);
  }

  /**
   *
   * @param product
   * @throws 실패 시 id로 반환
   * @returns {firebase.Thenable<any>}
   */
  update(product: Product): firebase.Thenable<UpdateResult> {
    const modifiedProd = Product.getNewForUpdate(product);
    return this._products$.update(product.$key, modifiedProd)
      .then(() => [true, modifiedProd.id])
      // .then(() => {
      //   if (modifiedProd.id === 6) {
      //     throw new Error('abcd');
      //   }
      //   return [true, modifiedProd.id];
      // })
      .catch((e) => [false, modifiedProd.id]);
  }

  count() {
    return this.idGenService.get('product');
  }
}
