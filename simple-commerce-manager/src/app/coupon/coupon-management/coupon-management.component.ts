import { Component, OnInit } from '@angular/core';
import { CheckedProdDataService } from "../../product/product-management/checked-prod-data.service";

@Component({
  selector: 'scm-coupon-management',
  templateUrl: './coupon-management.component.html',
  styleUrls: ['./coupon-management.component.css']
})
export class CouponManagementComponent implements OnInit {
  prodKeys: string[] = [];

  constructor(private cps: CheckedProdDataService) {}

  ngOnInit() {
    this.prodKeys= this.cps.checkedProductKeys;
  }

}
