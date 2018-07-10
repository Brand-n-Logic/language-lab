import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingactivityComponent } from './speakingactivity.component';

describe('SpeakingactivityComponent', () => {
  let component: SpeakingactivityComponent;
  let fixture: ComponentFixture<SpeakingactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakingactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
