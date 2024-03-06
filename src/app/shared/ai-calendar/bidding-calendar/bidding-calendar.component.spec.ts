import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingCalendarComponent } from './bidding-calendar.component';

describe('BiddingCalendarComponent', () => {
  let component: BiddingCalendarComponent;
  let fixture: ComponentFixture<BiddingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiddingCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
