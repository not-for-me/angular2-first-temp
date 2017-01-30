import { Component, ViewChild } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { NumberRangeValidator } from "./custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '상품 등록';
  prodForm: FormGroup;
  managers: FormArray;

  constructor(public fb: FormBuilder) {

    this.managers = this.fb.array([this.buildManagerFormGroup()]);


    /*
     this.prodForm = new FormGroup({
     name: new FormControl('', Validators.required),
     listPrice: new FormControl(0, [
     Validators.required,
     NumberRangeValidator.min(1000),
     NumberRangeValidator.max(1000000),
     Validators.pattern('[1-9]\\d*')
     ])
     ,
     qty: new FormControl(0, Validators.compose([
     Validators.required,
     NumberRangeValidator.min(1),
     NumberRangeValidator.max(100),
     Validators.pattern('[1-9]\\d*')
     ])),
     desc: new FormControl('', [
     Validators.required,
     Validators.minLength(5),
     Validators.maxLength(100)
     ]),
     managers: new FormArray([])
     });
     */

    this.prodForm = this.fb.group({
      name: ['', Validators.required],
      listPrice: [0,
        Validators.compose([
          Validators.required,
          NumberRangeValidator.min(1000),
          NumberRangeValidator.max(1000000),
          Validators.pattern('[1-9]\\d*')
        ])
      ],
      qty: [0, [
        Validators.required,
        NumberRangeValidator.min(1),
        NumberRangeValidator.max(100),
        Validators.pattern('[1-9]\\d*')
      ]],
      desc: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      managers: this.managers
    });
  }

  buildManagerFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNum: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern('010-[0-9]{4}-[0-9]{4}')
        ]))
    });
    // return this.fb.group(
    //   {
    //     name: ['', Validators.required],
    //     phoneNum: ['',
    //       Validators.compose([
    //         Validators.required,
    //         Validators.pattern('010-[0-9]{4}-[0-9]{4}')
    //       ])
    //     ]
    //   });
  }

  addManager() {
    this.managers.push(this.buildManagerFormGroup());
  }

  removeManager() {
    this.managers.removeAt(this.managers.length - 1);
  }

  onSubmit() {
    alert(`제출\n${JSON.stringify(this.prodForm.value)}`);
  }
}
