/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckListStatisticsService } from './check-list-statistics.service';

describe('CheckListStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckListStatisticsService]
    });
  });

  it('should ...', inject([CheckListStatisticsService], (service: CheckListStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
