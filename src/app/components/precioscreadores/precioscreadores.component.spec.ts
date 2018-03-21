import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioscreadoresComponent } from './precioscreadores.component';

describe('PrecioscreadoresComponent', () => {
  let component: PrecioscreadoresComponent;
  let fixture: ComponentFixture<PrecioscreadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecioscreadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecioscreadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
