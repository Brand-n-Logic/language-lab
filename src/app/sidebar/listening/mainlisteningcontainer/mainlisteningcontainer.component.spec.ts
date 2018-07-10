import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlisteningcontainerComponent } from './mainlisteningcontainer.component';

describe('MainlisteningcontainerComponent', () => {
  let component: MainlisteningcontainerComponent;
  let fixture: ComponentFixture<MainlisteningcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainlisteningcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlisteningcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
