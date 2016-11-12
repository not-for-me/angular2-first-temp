/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { I18nSupportService } from './i18n-support.service';

describe('Service: I18nSupport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nSupportService]
    });
  });

  it('should ...', inject([I18nSupportService], (service: I18nSupportService) => {
    expect(service).toBeTruthy();
  }));
});
