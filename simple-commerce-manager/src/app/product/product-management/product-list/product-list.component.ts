import { Component, OnInit } from '@angular/core';
import { Product, ProdStatus, Products } from "../../product.model";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty';

@Component({
  selector: 'scm-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  totalItemCnt: number;
  pageSize: number = 4;
  curPage: number = 1;
  // products: Products = [];
  products: Observable<Products> = Observable.empty();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.pageChanged(this.curPage);
    this.productService.getCount().subscribe(cnt => {
      console.log(`counts: ${cnt}`);
      this.totalItemCnt = cnt;
    });
  }

  pageChanged(pageNo) {
    this.products = this.productService.getProducts(this.pageSize, pageNo);
      // .subscribe(prods => {
    //   this.products = prods;
    // });
  }

  checkAllItem() {
  }

  checkItem(id: number) {

  }

}
