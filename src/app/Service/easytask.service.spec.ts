import { TestBed } from '@angular/core/testing';

import { EasytaskService } from './easytask.service';

describe('EasytaskService', () => {
  let service: EasytaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasytaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
