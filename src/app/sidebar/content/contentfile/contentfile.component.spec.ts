import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfileComponent } from './contentfile.component';

describe('ContentfileComponent', () => {
  let component: ContentfileComponent;
  let fixture: ComponentFixture<ContentfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
