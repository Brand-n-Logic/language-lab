import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphwritingComponent } from './paragraphwriting.component';

describe('ParagraphwritingComponent', () => {
  let component: ParagraphwritingComponent;
  let fixture: ComponentFixture<ParagraphwritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphwritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
