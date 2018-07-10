import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramadetailsComponent } from './dramadetails.component';

describe('DramadetailsComponent', () => {
  let component: DramadetailsComponent;
  let fixture: ComponentFixture<DramadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
