import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoproseComponent } from './demoprose.component';

describe('DemoproseComponent', () => {
  let component: DemoproseComponent;
  let fixture: ComponentFixture<DemoproseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoproseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoproseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
