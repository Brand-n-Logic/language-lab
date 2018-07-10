import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingstrategyComponent } from './readingstrategy.component';

describe('ReadingstrategyComponent', () => {
  let component: ReadingstrategyComponent;
  let fixture: ComponentFixture<ReadingstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
