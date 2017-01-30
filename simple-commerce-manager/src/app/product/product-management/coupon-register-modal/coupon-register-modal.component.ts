import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckedProdDataService } from "../checked-prod-data.service";
import { ProductService } from "../../product.service";
import { CouponService } from "../../../coupon/coupon.service";

@Component({
  selector: 'scm-coupon-register-modal',
  templateUrl: 'coupon-register-modal.component.html',
  styleUrls: ['coupon-register-modal.component.css']
})
export class CouponRegisterModalComponent implements OnInit {
  checkedProdIds: number[];
  coupons: any[];

  constructor(private productService: ProductService,
              private couponService: CouponService,
              private prodDataService: CheckedProdDataService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.checkedProdIds = this.prodDataService.checkedProductKeys;
  }

}
