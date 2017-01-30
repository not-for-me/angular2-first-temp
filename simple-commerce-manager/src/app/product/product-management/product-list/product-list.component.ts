import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Product, ProdStatus, Products } from "../../product.model";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty';
import { ActivatedRoute, Router } from "@angular/router";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";
import { CheckedProdDataService } from "../checked-prod-data.service";

@Component({
  selector: 'scm-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  totalItemCnt: number;
  pageSize: number;
  pageNo: number = 1;
  products: Products = [];
  prodCheckedStatus: boolean[];
  // checkedProdNos: number[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private checkedProdIdService: CheckedProdDataService,
              @Inject(PROD_LIST_PAGE_SIZE) pageSize) {
    this.pageSize = pageSize;
    this.initCheckedProducts();
  }

  ngOnInit() {
    this.route.data.subscribe((data: {listData: {cnt: number, list: Products}}) => {
      this.totalItemCnt = data.listData.cnt;
      this.products = data.listData.list;
    });
  }

  ngOnDestroy() {
    this.checkedProdIdService.initProdKeys();
  }

  pageNoChanged(pageNo) {
    this.pageNo = pageNo;
    this.initCheckedProducts();
    this.getPagedList();
  }

  pageSizeChanged(pageSize) {
    this.pageSize = +pageSize;
    this.initCheckedProducts();
    this.getPagedList();
  }

  toggleAllItem() {
    if (this.isCheckedAnyOne()) {
      this.checkedProdIdService.initProdKeys();
    }
    else {
      this.products.map(p => p.$key)
        .forEach(key => this.checkedProdIdService.addProdKey(key));
    }

    this.setAllProductsCheckedStatusTo(!this.isCheckedAnyOne());
  }

  checkProduct(idx: number, key: string) {
    this.prodCheckedStatus[idx] = !this.prodCheckedStatus[idx];

    if (this.prodCheckedStatus[idx]) {
      this.checkedProdIdService.addProdKey(key);
    }
    else {
      this.checkedProdIdService.removeProdKey(key);
    }
  }

  isCheckedAnyOne() {
    return this.prodCheckedStatus.reduce((acc, cur) => cur || acc, false);
  }

  private getPagedList() {
    this.productService.getListByDesc(this.pageNo, this.pageSize, this.totalItemCnt)
      .map((list: Products) => list.sort((p1, p2) => p2.id - p1.id))
      .subscribe(list => this.products = list);
  }

  private initCheckedProducts() {
    this.checkedProdIdService.initProdKeys();
    this.setAllProductsCheckedStatusTo(false);
  }

  private setAllProductsCheckedStatusTo(v: boolean) {
    this.prodCheckedStatus = [];
    Observable.range(0, this.pageSize).subscribe(i => this.prodCheckedStatus[i] = v);
  }

}
