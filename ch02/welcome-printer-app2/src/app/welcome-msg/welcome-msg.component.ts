import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MdInput, MdSnackBar} from '@angular/material';


import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  @ViewChild('nameInput')
  private mdInput: MdInput;
  private userName: string;
  private welcomeMsg: string = '';
  private isTouched: boolean = false;
  private static CHK_KEY_DOWN_DELAY_TIME: number = 5000;
  private static WELCOME_MSG_DELAY_TIME: number = 30000;

  constructor(public i18nSupportService: I18nSupportService, private _snackbar: MdSnackBar) {
  }

  ngAfterViewInit() {
    const inputRef = this.mdInput._inputElement;
    const userInputElem = <HTMLInputElement>inputRef.nativeElement;

    const keyDownEventHandler = (e) => {
      this.isTouched = true;
      userInputElem.removeEventListener("keydown", keyDownEventHandler);
    };

    userInputElem.addEventListener("keydown", keyDownEventHandler);

    const chkKeyDownDelaynFn = () => {
      if (!this.isTouched) {
        this._snackbar.open("이름을 입력해 주세요.", "확인");
      }
      userInputElem.removeEventListener("keydown", keyDownEventHandler);
    };
    setTimeout(chkKeyDownDelaynFn, WelcomeMsgComponent.CHK_KEY_DOWN_DELAY_TIME);
  }

  private printWelcomeMsg() {
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsg(this.userName);
    setTimeout(() => {this.welcomeMsg = ""}, WelcomeMsgComponent.WELCOME_MSG_DELAY_TIME);
  }
}

