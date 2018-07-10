import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingrammarcontainerComponent } from './maingrammarcontainer.component';

describe('MaingrammarcontainerComponent', () => {
  let component: MaingrammarcontainerComponent;
  let fixture: ComponentFixture<MaingrammarcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaingrammarcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaingrammarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
