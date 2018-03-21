import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendamuestraComponent } from './tiendamuestra.component';

describe('TiendamuestraComponent', () => {
  let component: TiendamuestraComponent;
  let fixture: ComponentFixture<TiendamuestraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendamuestraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendamuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
