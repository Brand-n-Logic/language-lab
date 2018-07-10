import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIiComponent } from './video-ii.component';

describe('VideoIiComponent', () => {
  let component: VideoIiComponent;
  let fixture: ComponentFixture<VideoIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
