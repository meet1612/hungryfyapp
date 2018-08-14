import { TestBed, inject } from '@angular/core/testing';

import { BdetailService } from './bdetail.service';

describe('BdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdetailService]
    });
  });

  it('should be created', inject([BdetailService], (service: BdetailService) => {
    expect(service).toBeTruthy();
  }));
});
