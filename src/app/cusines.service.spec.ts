import { TestBed, inject } from '@angular/core/testing';

import { CusinesService } from './cusines.service';

describe('CusinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusinesService]
    });
  });

  it('should be created', inject([CusinesService], (service: CusinesService) => {
    expect(service).toBeTruthy();
  }));
});
