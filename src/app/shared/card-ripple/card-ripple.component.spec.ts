import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRippleComponent } from './card-ripple.component';

describe('CardRippleComponent', () => {
  let component: CardRippleComponent;
  let fixture: ComponentFixture<CardRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
