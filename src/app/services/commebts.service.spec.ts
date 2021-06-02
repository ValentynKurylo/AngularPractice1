import { TestBed } from '@angular/core/testing';

import { CommebtsService } from './commebts.service';

describe('CommebtsService', () => {
  let service: CommebtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommebtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
