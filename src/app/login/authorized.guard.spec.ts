import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizedGuard } from './authorized.guard';

describe('LoginSuccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedGuard]
    });
  });

  it('should ...', inject([AuthorizedGuard], (guard: AuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
