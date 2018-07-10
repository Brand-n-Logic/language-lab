import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarexComponent } from './navbarex.component';

describe('NavbarexComponent', () => {
  let component: NavbarexComponent;
  let fixture: ComponentFixture<NavbarexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
