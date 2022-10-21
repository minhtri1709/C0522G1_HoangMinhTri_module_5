import { TestBed } from '@angular/core/testing';

import { DictionaryServiceSkipTestsService } from './dictionary-service--skip-tests.service';

describe('DictionaryServiceSkipTestsService', () => {
  let service: DictionaryServiceSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryServiceSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
