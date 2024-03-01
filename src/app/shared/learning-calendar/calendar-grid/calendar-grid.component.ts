import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from 'src/app/shared/interface/day.model';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.css'],
})
export class CalendarGridComponent implements OnInit {
  @Input('days')
  days: Day[] = [];
  @Input('currentDate')
  currentDate: Date = new Date();
  @Input('dateEventMap')
  dateEventMap: Map<string, LeaveHolidayData[]> = new Map();

  @Output('selectDay')
  selectDay = new EventEmitter<Day>();

  constructor() {}

  ngOnInit(): void {}

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth() &&
      date.getFullYear() === this.currentDate.getFullYear()
    );
  }

  handleSelectDay(day: Day): void {
    this.selectDay.emit(day);
  }
}
