import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductService } from "../../product.service";
import { Products } from "../../product.model";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";

@Injectable()
export class ProductListResolverService implements Resolve<any> {

  constructor(private productService: ProductService, @Inject(PROD_LIST_PAGE_SIZE) private pageSize) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.productService.count()
      .switchMap(cnt => {
        const count$ = Observable.of(cnt);
        const sortedProducts$ = this.productService.getListByDesc(1, this.pageSize, cnt)
          .map((list: Products) => list.sort((p1, p2) => p2.id - p1.id));

        return Observable.zip(count$, sortedProducts$, (cnt: number, list: Products) => ({cnt, list}));
      }).take(1);
  }
}
