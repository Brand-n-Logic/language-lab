import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneticscontainerComponent } from './phoneticscontainer.component';

describe('PhoneticscontainerComponent', () => {
  let component: PhoneticscontainerComponent;
  let fixture: ComponentFixture<PhoneticscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneticscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneticscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
