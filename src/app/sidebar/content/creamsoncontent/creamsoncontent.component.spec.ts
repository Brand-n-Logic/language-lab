import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamsoncontentComponent } from './creamsoncontent.component';

describe('CreamsoncontentComponent', () => {
  let component: CreamsoncontentComponent;
  let fixture: ComponentFixture<CreamsoncontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreamsoncontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreamsoncontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
