import { TestBed } from '@angular/core/testing';

import { CommentsService } from './commebts.service';

describe('CommebtsService', () => {
  let service: CommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
