import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/shared/ai-calendar/interface/day.model';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  @Input('device')
  device: string = 'desktop';
  @Input('days')
  days: Day[] = [];
  @Input('currentDate')
  currentDate: Date = new Date();
  @Input('dateEventMap')
  dateEventMap: Map<string, LeaveHolidayData[]> = new Map();

  constructor() {}

  ngOnInit(): void {}

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth() &&
      date.getFullYear() === this.currentDate.getFullYear()
    );
  }
}
