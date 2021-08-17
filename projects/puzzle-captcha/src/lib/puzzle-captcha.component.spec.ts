import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCaptchaComponent } from './puzzle-captcha.component';

describe('PuzzleCaptchaComponent', () => {
  let component: PuzzleCaptchaComponent;
  let fixture: ComponentFixture<PuzzleCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
