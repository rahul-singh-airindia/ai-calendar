import { Component, Input, OnInit } from '@angular/core';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent implements OnInit {
  @Input('device')
  device: string = 'desktop';
  @Input('date')
  date: Date = new Date();
  @Input('currentDate')
  currentDate: Date = new Date();
  @Input('dateEventMap')
  dateEventMap: Map<string, LeaveHolidayData[]> = new Map();

  isDialogVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }

  isToday(date: Date) {
    const today = new Date();

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  getEventCount(date: Date): number {
    return this.dateEventMap.get(date.toLocaleDateString())?.length || 0;
  }

  getEvent(date: Date): LeaveHolidayData {
    return (
      this.dateEventMap.get(date.toLocaleDateString())?.[0] ||
      ({} as LeaveHolidayData)
    );
  }

  getEvents(date: Date): LeaveHolidayData[] {
    return this.dateEventMap.get(date.toLocaleDateString()) || [];
  }
}
