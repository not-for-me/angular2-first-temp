import { Component, OnInit } from '@angular/core';

import { I18nSupportService } from '../i18n-support.service'
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  private langCode: string;
  private langMetadata: any[] = LANG_METADATA;

  constructor(public i18nSupportService: I18nSupportService) {
    this.langCode = 'ko';
    this.syncCodeToService(this.langCode);
  }

  ngOnInit() {
  }

  syncCodeToService(code) {
    this.i18nSupportService.setLangCode(code);
  }
}
