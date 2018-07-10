import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicdescriberComponent } from './picdescriber.component';

describe('PicdescriberComponent', () => {
  let component: PicdescriberComponent;
  let fixture: ComponentFixture<PicdescriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicdescriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicdescriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
