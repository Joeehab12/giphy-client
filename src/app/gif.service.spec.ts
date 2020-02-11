import { TestBed } from '@angular/core/testing';

import { GIFService } from './gif.service';

describe('GIFService', () => {
  let service: GIFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GIFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
