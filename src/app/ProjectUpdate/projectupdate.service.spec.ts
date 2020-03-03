import { TestBed } from '@angular/core/testing';

import { ProjectupdateService } from './projectupdate.service';

describe('ProjectupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectupdateService = TestBed.get(ProjectupdateService);
    expect(service).toBeTruthy();
  });
});
