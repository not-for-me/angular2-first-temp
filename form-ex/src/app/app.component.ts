import { Component,  ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = '상품 등록';
  product: any;
  @ViewChild('prodForm') prodForm: NgForm;

  constructor() {
    this.initProduct();
  }

  initProduct() {
    // this.product = { name: '', listPrice: '', qty: 0, managerInfo: [{name: '', phoneNum: ''}], desc: '' };
    this.product = { name: '', listPrice: '', qty: 0, managerInfo: {name: '', phoneNum: ''}, desc: '' };
  }

  addManager() {
    // this.product.managerInfo.push({name: '', phoneNum: ''});
  }

  removeManager() {
    // this.product.managerInfo.pop();
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.product)}`);
  }

  onReset() {
    this.initProduct();
  }
}
