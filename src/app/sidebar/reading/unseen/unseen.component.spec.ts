import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenComponent } from './unseen.component';

describe('UnseenComponent', () => {
  let component: UnseenComponent;
  let fixture: ComponentFixture<UnseenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnseenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
