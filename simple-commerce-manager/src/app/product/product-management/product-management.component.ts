import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CouponRegisterModalComponent } from "./coupon-register-modal/coupon-register-modal.component";
import { CheckedProdDataService } from "./checked-prod-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'scm-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  constructor(
    private cps: CheckedProdDataService,
    private router: Router,
    private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openCouponRegisterModal() {
    this.cps.frozen = true;
    this.router.navigate(['/coupon-list']);
    // const modalRef = this.modalService.open(CouponRegisterModalComponent);
    // modalRef.result
    //   .then(result => console.log(`close: ${result}`))
    //   .catch(r => console.log(`dismiss: ${r}`));
  }

}
