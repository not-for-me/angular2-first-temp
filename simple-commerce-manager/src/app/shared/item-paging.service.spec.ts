/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemPagingService } from './item-paging.service';

describe('ItemPagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemPagingService]
    });
  });

  it('should ...', inject([ItemPagingService], (service: ItemPagingService<any>) => {
    expect(service).toBeTruthy();
  }));
});
