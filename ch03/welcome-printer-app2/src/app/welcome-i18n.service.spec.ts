/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WelcomeI18nService } from './welcome-i18n.service';

describe('Service: WelcomeI18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeI18nService]
    });
  });

  it('should ...', inject([WelcomeI18nService], (service: WelcomeI18nService) => {
    expect(service).toBeTruthy();
  }));
});
