import { Component, OnInit } from '@angular/core';
import { CheckedProdDataService } from "../../product/product-management/checked-prod-data.service";
import { Coupon } from "../coupon.model";
import { ProductBulkUpdaterService } from "../../product/product-management/product-list/product-bulk-updater.service";
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: 'scm-coupon-register',
  templateUrl: './coupon-register.component.html',
  styleUrls: ['./coupon-register.component.css']
})
export class CouponRegisterComponent implements OnInit {
  coupon: Coupon;

  constructor(private cps: CheckedProdDataService,
              private bulkUpdater: ProductBulkUpdaterService,
              private toastr: ToastsManager) {
  }

  ngOnInit() {
  }

  selectedCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  register() {
    this.bulkUpdater.updateProductsCoupon(this.coupon.id)
      .subscribe(
        (successIds) => {
          this.toastr.success(`쿠폰 등록 성공<br>ID: ${successIds.join(', ')}`, '[쿠폰 등록]');
        },
        (e: Error) => this.toastr.error(`쿠폰 등록 실패<br>ID:${e.message}`, '[쿠폰 등록]')
      );
  }

}
