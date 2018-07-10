import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIiiComponent } from './video-iii.component';

describe('VideoIiiComponent', () => {
  let component: VideoIiiComponent;
  let fixture: ComponentFixture<VideoIiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoIiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
