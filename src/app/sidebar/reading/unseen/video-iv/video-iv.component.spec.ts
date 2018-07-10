import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIvComponent } from './video-iv.component';

describe('VideoIvComponent', () => {
  let component: VideoIvComponent;
  let fixture: ComponentFixture<VideoIvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
