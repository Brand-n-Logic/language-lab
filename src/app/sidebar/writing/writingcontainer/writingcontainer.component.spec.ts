import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingcontainerComponent } from './writingcontainer.component';

describe('WritingcontainerComponent', () => {
  let component: WritingcontainerComponent;
  let fixture: ComponentFixture<WritingcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
