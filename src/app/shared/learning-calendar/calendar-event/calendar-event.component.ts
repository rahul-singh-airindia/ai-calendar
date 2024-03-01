import { Component, Input, OnInit } from '@angular/core';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css'],
})
export class CalendarEventComponent implements OnInit {
  @Input('leaveHolidayData')
  leaveHolidayData: LeaveHolidayData = {} as LeaveHolidayData;

  constructor() {}

  ngOnInit(): void {}

  titleCase(str: string) {
    return str.replace(
      /\b\w/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  getEventTitle(event: LeaveHolidayData) {
    const leaveType = event.title;
    let leaveName = event.extendedProps.holidayLeaveName;

    if (leaveType.toLowerCase() === 'leave') {
      leaveName = leaveName.toLowerCase().replace(' leave', '');
    }

    return this.titleCase(leaveName);
  }

  getEventStatus(event: LeaveHolidayData) {
    const status = event.extendedProps?.status || 'all day';
    return this.titleCase(status.toLowerCase());
  }

  getLeaveStatus(event: LeaveHolidayData) {
    const status = event.extendedProps?.status || 'all-day';
    return status.replace(' ', '-').toLowerCase();
  }

  getEventDuration(event: LeaveHolidayData): number {
    return parseInt(event.extendedProps.duration);
  }
}
