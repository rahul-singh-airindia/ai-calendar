import { Component, Input } from '@angular/core';
import { Day } from '../../interface/day.model';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent {
  @Input()
  device: string = 'desktop';

  @Input()
  days: Day[] = [];

  @Input()
  currentDate: Date = new Date();

  @Input()
  dateEventMap: Map<string, LeaveHolidayData[]> = new Map();

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth()
      && date.getFullYear() === this.currentDate.getFullYear()
    );
  }
}
