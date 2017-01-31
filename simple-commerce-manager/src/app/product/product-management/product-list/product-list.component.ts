import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Product, ProdStatus, Products } from "../../product.model";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty';
import { ActivatedRoute, Router } from "@angular/router";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";
import { CheckedProdDataService } from "../checked-prod-data.service";
import { ProductBulkUpdaterService } from "./product-bulk-updater.service";
import { ToastsManager } from "ng2-toastr";

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
  clickedHandler: {coupon: () => void, sell: () => void, stop: () => void};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private  cps: CheckedProdDataService,
              private productService: ProductService,
              private prodStatusUpdater: ProductBulkUpdaterService,
              private checkedProdIdService: CheckedProdDataService,
              private toastr: ToastsManager,
              @Inject(PROD_LIST_PAGE_SIZE) pageSize) {
    this.pageSize = pageSize;
    this.initCheckedProducts();
  }

  ngOnInit() {
    this.fetchResolvedData();
    this.setBtnClickHandler();
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

  clickedBtn(btnEvent: string) {
    this.clickedHandler[btnEvent]();
  }

  private fetchResolvedData() {
    const routeData = <{listData: {cnt: number, list: Products}}> this.route.snapshot.data;
    this.totalItemCnt = routeData.listData.cnt;
    this.products = routeData.listData.list;
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

  private setBtnClickHandler() {
    const routeCouponPage = () => {
      this.cps.frozen = true;
      this.router.navigate(['/coupon-register']);
    };
    const clickedSell = () => {
      this.prodStatusUpdater.updateProductsToSell()
        .subscribe(
          (successIds) => {
            this.getPagedList();
            this.toastr.success(`상품 판매 변경 성공<br>ID: ${successIds.join(', ')}`, '[상품관리]');
          },
          (e: Error) => this.toastr.error(`상품 판매 변경 실패<br>ID: ${e.message}`, '[상품관리]')
        );
    };
    const clickedStop = () => {
      this.prodStatusUpdater.updateProductsToStop()
        .subscribe(
          (successIds) => {
            this.getPagedList();
            this.toastr.success(`상품 판매중지 변경 성공<br>ID: ${successIds.join(', ')}`, '[상품관리]');
          },
          (e: Error) => this.toastr.error(`상품 판매중지 변경 실패<br>ID:${e.message}`, '[상품관리]')
        );
    };

    this.clickedHandler = {
      coupon: routeCouponPage,
      sell: clickedSell,
      stop: clickedStop
    };
  }

}
