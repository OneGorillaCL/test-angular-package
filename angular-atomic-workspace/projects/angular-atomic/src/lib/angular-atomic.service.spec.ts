import { TestBed } from '@angular/core/testing';

import { AngularAtomicService } from './angular-atomic.service';

describe('AngularAtomicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularAtomicService = TestBed.get(AngularAtomicService);
    expect(service).toBeTruthy();
  });
});
