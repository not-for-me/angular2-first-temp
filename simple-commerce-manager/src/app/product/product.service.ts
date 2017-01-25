import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { Products, Product, ProdStatus } from "./product.model";
import { IdGenService } from "../shared/id-gen.service";
import { ItemPagingService } from "../shared/item-paging.service";

@Injectable()
export class ProductService extends ItemPagingService<Products> {
  private _products$: FirebaseListObservable<Products>;

  constructor(private af: AngularFire, private idGenService: IdGenService) {
    super();
    this._products$ = af.database.list('/products');
  }

  create(product): Observable<Product> {
    return this.idGenService.update('product')
      .map((id) => this._products$.push({id: id, status: ProdStatus.WAIT_FOR_SALE}).key)
      .do(k => console.log('after create: ' + k))
      .switchMap($key => this.af.database.object(`/products/${$key}`).take(1));
  }

  get(key: string) {
    return this.af.database.object(`/products/${key}`).take(1);
  }

  getStream(option) {
    return this.af.database.list('/products', option);
  }

  update(product: Product) {
    const modifiedProd = {
      name: product.name,
      listPrice: product.listPrice,
      status: product.status,
      // options: product.options,
      desc: product.desc,
      catId: product.catId,
      // couponId: product.couponId
    };
    return this._products$.update(product.$key, modifiedProd);
  }

  count() {
    return this.idGenService.get('product');
  }
}
