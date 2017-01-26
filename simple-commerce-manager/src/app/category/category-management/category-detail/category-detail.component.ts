import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastsManager } from "ng2-toastr";
import { CategoryService } from "../../category.service";

@Component({
  selector: 'scm-category-detail',
  templateUrl: 'category-detail.component.html',
  styleUrls: ['category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  @Input() cat: any;
  @Input() editable: boolean = false;
  @Output() submittedCat: EventEmitter<any> = new EventEmitter();

  subTitle: string;

  constructor(private catService: CategoryService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.subTitle = this.editable ? '수정' : '등록';
    this.cat = this.editable ? this.cat :  this._getInitData();
  }

  submit() {
    if (this.editable) {
      this.modify();
    } else {
      this.create();
    }
  }

  create() {
    this.catService.create(this.cat.name, this.cat.desc)
      .subscribe(this.onSuccess(), this.onError());
  }

  modify(){
    this.catService.update(this.cat)
      .then(this.onSuccess(), this.onError());
  }

  private _getInitData() {
    return {name: '', desc: ''};
  }

  private onSuccess() {
    return () => {
      this.toastr.success(`카테고리 ${this.subTitle} 완료`, '[카테고리 관리]');
      this.cat = this._getInitData();
      this.submittedCat.emit('');
    };
  }

  private onError() {
    return e => {
      console.log(e);
      this.toastr.error(`카테고리 ${this.subTitle} 실패}`, '[카테고리 관리]');
    };
  }
}
