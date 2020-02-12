import { TestBed } from '@angular/core/testing';

import { RockStarService } from './rock-star.service';

describe('RockStarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RockStarService = TestBed.get(RockStarService);
    expect(service).toBeTruthy();
  });
});
