import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwritingcontainerComponent } from './mainwritingcontainer.component';

describe('MainwritingcontainerComponent', () => {
  let component: MainwritingcontainerComponent;
  let fixture: ComponentFixture<MainwritingcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainwritingcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwritingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
