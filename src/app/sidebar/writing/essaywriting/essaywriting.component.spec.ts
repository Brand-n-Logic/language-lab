import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaywritingComponent } from './essaywriting.component';

describe('EssaywritingComponent', () => {
  let component: EssaywritingComponent;
  let fixture: ComponentFixture<EssaywritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaywritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaywritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
