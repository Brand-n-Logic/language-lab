import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarexComponent } from './sidebarex.component';

describe('SidebarexComponent', () => {
  let component: SidebarexComponent;
  let fixture: ComponentFixture<SidebarexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
