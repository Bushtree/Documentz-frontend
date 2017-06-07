import { TestBed, inject } from '@angular/core/testing';

import { StoredItemsApiService } from './stored-items-api.service';

describe('StoredItemsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoredItemsApiService]
    });
  });

  it('should be created', inject([StoredItemsApiService], (service: StoredItemsApiService) => {
    expect(service).toBeTruthy();
  }));
});
