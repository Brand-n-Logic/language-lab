import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProseMainComponent } from './prose-main.component';

describe('ProseMainComponent', () => {
  let component: ProseMainComponent;
  let fixture: ComponentFixture<ProseMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProseMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
