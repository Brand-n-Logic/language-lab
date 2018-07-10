import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRecComponent } from './audio-rec.component';

describe('AudioRecComponent', () => {
  let component: AudioRecComponent;
  let fixture: ComponentFixture<AudioRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
