import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfassesmentComponent } from './selfassesment.component';

describe('SelfassesmentComponent', () => {
  let component: SelfassesmentComponent;
  let fixture: ComponentFixture<SelfassesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfassesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfassesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
