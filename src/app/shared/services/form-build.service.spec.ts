import { TestBed } from '@angular/core/testing';

import { FormBuildService } from './form-build.service';

describe('FormBuildService', () => {
  let service: FormBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
