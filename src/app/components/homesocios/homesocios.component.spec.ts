import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesociosComponent } from './homesocios.component';

describe('HomesociosComponent', () => {
  let component: HomesociosComponent;
  let fixture: ComponentFixture<HomesociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
