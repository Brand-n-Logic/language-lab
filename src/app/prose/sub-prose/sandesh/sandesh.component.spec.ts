import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandeshComponent } from './sandesh.component';

describe('SandeshComponent', () => {
  let component: SandeshComponent;
  let fixture: ComponentFixture<SandeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
