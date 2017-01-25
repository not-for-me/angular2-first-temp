import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Product } from "../../product.model";
import { ProductService } from "../../product.service";

@Injectable()
export class ProductDetailResolverService implements Resolve<Product> {

  constructor(private productService: ProductService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const action = route.queryParams['action'];
    if (action === 'create') {
      return this.productService.create({})
    }

    const key = route.queryParams['key'];

    return this.productService
      .get(key)
      .map(product => {
        if (product) {
          return product;
        }

        this.router.navigate(['/product-list']);
        return null;
      });
  }
}
