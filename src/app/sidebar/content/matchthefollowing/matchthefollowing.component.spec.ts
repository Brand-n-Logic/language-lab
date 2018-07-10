import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchthefollowingComponent } from './matchthefollowing.component';

describe('MatchthefollowingComponent', () => {
  let component: MatchthefollowingComponent;
  let fixture: ComponentFixture<MatchthefollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchthefollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchthefollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
