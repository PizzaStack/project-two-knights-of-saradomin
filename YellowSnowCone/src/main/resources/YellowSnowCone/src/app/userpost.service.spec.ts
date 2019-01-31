import { TestBed } from '@angular/core/testing';

import { UserpostService } from './userpost.service';

describe('UserpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserpostService = TestBed.get(UserpostService);
    expect(service).toBeTruthy();
  });
});
