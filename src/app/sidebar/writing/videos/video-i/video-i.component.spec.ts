import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIComponent } from './video-i.component';

describe('VideoIComponent', () => {
  let component: VideoIComponent;
  let fixture: ComponentFixture<VideoIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
