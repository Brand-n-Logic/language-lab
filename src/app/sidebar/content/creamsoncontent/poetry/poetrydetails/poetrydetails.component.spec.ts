import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetrydetailsComponent } from './poetrydetails.component';

describe('PoetrydetailsComponent', () => {
  let component: PoetrydetailsComponent;
  let fixture: ComponentFixture<PoetrydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetrydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
