import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarcontainerComponent } from './grammarcontainer.component';

describe('GrammarcontainerComponent', () => {
  let component: GrammarcontainerComponent;
  let fixture: ComponentFixture<GrammarcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
