import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilltheblanksComponent } from './filltheblanks.component';

describe('FilltheblanksComponent', () => {
  let component: FilltheblanksComponent;
  let fixture: ComponentFixture<FilltheblanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilltheblanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilltheblanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
