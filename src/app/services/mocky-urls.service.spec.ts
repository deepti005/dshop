import { TestBed } from '@angular/core/testing';

import { MockyUrlsService } from './mocky-urls.service';

describe('MockyUrlsService', () => {
  let service: MockyUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockyUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
