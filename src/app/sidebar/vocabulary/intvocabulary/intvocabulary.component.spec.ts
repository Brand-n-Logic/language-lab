import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntvocabularyComponent } from './intvocabulary.component';

describe('IntvocabularyComponent', () => {
  let component: IntvocabularyComponent;
  let fixture: ComponentFixture<IntvocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntvocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntvocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
