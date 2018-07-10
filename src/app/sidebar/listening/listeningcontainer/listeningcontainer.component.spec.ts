import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningcontainerComponent } from './listeningcontainer.component';

describe('ListeningcontainerComponent', () => {
  let component: ListeningcontainerComponent;
  let fixture: ComponentFixture<ListeningcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
