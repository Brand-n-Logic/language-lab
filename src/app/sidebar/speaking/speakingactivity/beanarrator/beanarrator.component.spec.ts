import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanarratorComponent } from './beanarrator.component';

describe('BeanarratorComponent', () => {
  let component: BeanarratorComponent;
  let fixture: ComponentFixture<BeanarratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeanarratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanarratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
