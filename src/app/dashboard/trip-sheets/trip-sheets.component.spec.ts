import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSheetsComponent } from './trip-sheets.component';

describe('TripSheetsComponent', () => {
  let component: TripSheetsComponent;
  let fixture: ComponentFixture<TripSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
