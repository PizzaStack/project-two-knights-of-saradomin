import { TestBed } from '@angular/core/testing';

import { PostinteractionsService } from './postinteractions.service';

describe('PostinteractionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostinteractionsService = TestBed.get(PostinteractionsService);
    expect(service).toBeTruthy();
  });
});
