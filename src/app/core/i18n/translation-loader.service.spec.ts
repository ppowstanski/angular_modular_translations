import {TestBed} from '@angular/core/testing';
import {TranslationLoaderService} from './translation-loader.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('TranslationLoaderService', () => {
  let service: TranslationLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = new TranslationLoaderService(TestBed.inject(HttpClient), 'test');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
