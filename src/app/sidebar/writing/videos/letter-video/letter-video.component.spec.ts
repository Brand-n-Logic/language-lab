import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterVideoComponent } from './letter-video.component';

describe('LetterVideoComponent', () => {
  let component: LetterVideoComponent;
  let fixture: ComponentFixture<LetterVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
