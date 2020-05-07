import { TestBed, inject } from '@angular/core/testing';

import { GetuserbyidService } from './getuserbyid.service';

describe('GetuserbyidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetuserbyidService]
    });
  });

  it('should be created', inject([GetuserbyidService], (service: GetuserbyidService) => {
    expect(service).toBeTruthy();
  }));
});
