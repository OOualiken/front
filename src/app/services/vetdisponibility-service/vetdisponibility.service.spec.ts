import { TestBed } from '@angular/core/testing';

import { VetdisponibilityService } from './vetdisponibility.service';

describe('VetdisponibilityService', () => {
  let service: VetdisponibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetdisponibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
