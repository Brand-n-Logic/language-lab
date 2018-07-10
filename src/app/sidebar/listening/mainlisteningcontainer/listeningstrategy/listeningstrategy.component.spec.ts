import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningstrategyComponent } from './listeningstrategy.component';

describe('ListeningstrategyComponent', () => {
  let component: ListeningstrategyComponent;
  let fixture: ComponentFixture<ListeningstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
