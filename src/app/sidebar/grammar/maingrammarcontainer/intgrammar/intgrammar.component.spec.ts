import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntgrammarComponent } from './intgrammar.component';

describe('IntgrammarComponent', () => {
  let component: IntgrammarComponent;
  let fixture: ComponentFixture<IntgrammarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntgrammarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntgrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
