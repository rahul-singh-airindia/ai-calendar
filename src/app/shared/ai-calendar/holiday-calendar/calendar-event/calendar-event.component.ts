import { Component, Input } from '@angular/core';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss'],
})
export class CalendarEventComponent {
  @Input()
  device: string = 'desktop';

  @Input()
  date: Date = new Date();

  @Input()
  leaveHolidayData: LeaveHolidayData = {} as LeaveHolidayData;

  titleCase(str: string) {
    return str.replace(
      /\b\w/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
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
    return parseInt(event.extendedProps.duration, 10);
  }

  px2em(px: number, base: number = 16): number {
    return px / base;
  }

  getEventTileWidth(event: LeaveHolidayData): string {
    const eventDuration = this.getEventDuration(event);
    const emValue = eventDuration * 100 - 15;
    return `${emValue}%`;
  }
}
