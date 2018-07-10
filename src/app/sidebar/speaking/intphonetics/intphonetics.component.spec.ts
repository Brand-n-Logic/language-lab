import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntphoneticsComponent } from './intphonetics.component';

describe('IntphoneticsComponent', () => {
  let component: IntphoneticsComponent;
  let fixture: ComponentFixture<IntphoneticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntphoneticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntphoneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
