import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingstrategyComponent } from './speakingstrategy.component';

describe('SpeakingstrategyComponent', () => {
  let component: SpeakingstrategyComponent;
  let fixture: ComponentFixture<SpeakingstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakingstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
