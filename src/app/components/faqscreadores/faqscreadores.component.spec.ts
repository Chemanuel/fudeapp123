import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqscreadoresComponent } from './faqscreadores.component';

describe('FaqscreadoresComponent', () => {
  let component: FaqscreadoresComponent;
  let fixture: ComponentFixture<FaqscreadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqscreadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqscreadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
