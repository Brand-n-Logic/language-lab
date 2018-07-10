import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingcontainerComponent } from './readingcontainer.component';

describe('ReadingcontainerComponent', () => {
  let component: ReadingcontainerComponent;
  let fixture: ComponentFixture<ReadingcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
