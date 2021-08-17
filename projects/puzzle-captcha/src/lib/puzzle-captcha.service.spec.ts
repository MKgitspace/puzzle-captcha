import { TestBed } from '@angular/core/testing';

import { PuzzleCaptchaService } from './puzzle-captcha.service';

describe('PuzzleCaptchaService', () => {
  let service: PuzzleCaptchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleCaptchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
