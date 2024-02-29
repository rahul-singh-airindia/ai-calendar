import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCalendarViewComponent } from './leave-calendar-view.component';

describe('LeaveCalendarViewComponent', () => {
  let component: LeaveCalendarViewComponent;
  let fixture: ComponentFixture<LeaveCalendarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveCalendarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
