import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingstrategyComponent } from './writingstrategy.component';

describe('WritingstrategyComponent', () => {
  let component: WritingstrategyComponent;
  let fixture: ComponentFixture<WritingstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
