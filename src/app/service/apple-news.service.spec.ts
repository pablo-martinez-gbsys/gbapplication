import { TestBed } from '@angular/core/testing';

import { AppleNewsService } from './apple-news.service';

describe('AppleNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppleNewsService = TestBed.get(AppleNewsService);
    expect(service).toBeTruthy();
  });
});
