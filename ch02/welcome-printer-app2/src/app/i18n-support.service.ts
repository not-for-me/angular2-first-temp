import { Injectable } from '@angular/core';
import { LANG_METADATA } from './lang-metadata';

@Injectable()
export class I18nSupportService {
  private langCode: string;

  constructor() {
  }

  setLangCode(code: string) {
    this.langCode = code;
  }

  getLangCode(): string {
    return this.langCode;
  }

  getWelcomeMsg(userName: string) {
    let helloMsg;
    LANG_METADATA.forEach((lang) => {
      if (lang.code === this.langCode) {
        helloMsg = lang.msg;
      }
    });

    return `${helloMsg}, ${userName}!`;
  }
}
