import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsspeakComponent } from './letsspeak.component';

describe('LetsspeakComponent', () => {
  let component: LetsspeakComponent;
  let fixture: ComponentFixture<LetsspeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsspeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsspeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
