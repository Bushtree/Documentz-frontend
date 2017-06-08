import { TestBed, inject } from '@angular/core/testing';

import { AttachmentApiService } from './attachment-api.service';

describe('AttachmentApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttachmentApiService]
    });
  });

  it('should be created', inject([AttachmentApiService], (service: AttachmentApiService) => {
    expect(service).toBeTruthy();
  }));
});
