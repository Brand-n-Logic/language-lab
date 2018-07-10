import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsecontentComponent } from './prosecontent.component';

describe('ProsecontentComponent', () => {
  let component: ProsecontentComponent;
  let fixture: ComponentFixture<ProsecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
