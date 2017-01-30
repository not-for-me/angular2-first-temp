import { Component, OnInit, Inject } from '@angular/core';
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
export class ProductListComponent implements OnInit {
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
      this.checkedProdIdService.initProdIds();
    }
    else {
      this.products.map(p => p.id)
        .forEach(id => this.checkedProdIdService.addProdId(id));
    }

    this.setAllProductsCheckedStatusTo(!this.isCheckedAnyOne());
  }

  checkProduct(idx: number, prodId: number) {
    this.prodCheckedStatus[idx] = !this.prodCheckedStatus[idx];

    if (this.prodCheckedStatus[idx]) {
      this.checkedProdIdService.addProdId(prodId);
    }
    else {
      this.checkedProdIdService.removeProdId(prodId);
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
    this.checkedProdIdService.initProdIds();
    this.setAllProductsCheckedStatusTo(false);
  }

  private setAllProductsCheckedStatusTo(v: boolean) {
    this.prodCheckedStatus = [];
    Observable.range(0, this.pageSize).subscribe(i => this.prodCheckedStatus[i] = v);
  }

}
