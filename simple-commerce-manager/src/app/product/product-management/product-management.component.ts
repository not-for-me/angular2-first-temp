import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CouponRegisterModalComponent } from "./coupon-register-modal/coupon-register-modal.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CheckedProdDataService } from "./checked-prod-data.service";

@Component({
  selector: 'scm-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  private checkedIds: number[];

  constructor(
    private prodDataService: CheckedProdDataService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    // this.prodDataService.checkedIds$.subscribe(ids => this.checkedIds = ids);
  }

  openCouponRegisterModal() {
    const modalRef = this.modalService.open(CouponRegisterModalComponent);
    // modalRef.componentInstance.checkedProdIds = checkedIds;
    modalRef.result
      .then(result => console.log(`close: ${result}`))
      .catch(r => console.log(`dismiss: ${r}`));
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
