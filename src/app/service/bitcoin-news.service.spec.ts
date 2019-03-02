import { TestBed } from '@angular/core/testing';

import { BitcoinNewsService } from './bitcoin-news.service';

describe('BitcoinNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinNewsService = TestBed.get(BitcoinNewsService);
    expect(service).toBeTruthy();
  });
});
