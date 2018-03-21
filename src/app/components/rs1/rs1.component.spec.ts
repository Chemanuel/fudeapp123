import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rs1Component } from './rs1.component';

describe('Rs1Component', () => {
  let component: Rs1Component;
  let fixture: ComponentFixture<Rs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
