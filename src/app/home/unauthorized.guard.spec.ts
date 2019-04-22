import { TestBed, async, inject } from '@angular/core/testing';

import { UnAuthorizedGuard } from './unauthorized.guard';

describe('UnAuthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthorizedGuard]
    });
  });

  it('should ...', inject([UnAuthorizedGuard], (guard: UnAuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
