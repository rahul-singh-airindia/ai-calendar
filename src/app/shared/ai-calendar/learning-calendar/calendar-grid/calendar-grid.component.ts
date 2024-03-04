import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../../interface/day.model';
import { LearningCalendarData } from '../../interface/learning-calendar/learning-calendar.interface';

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  @Input('days')
  days: Day[] = [];
  @Input('currentDate')
  currentDate: Date = new Date();
  @Input('dateEventMap')
  dateEventMap: Map<string, LearningCalendarData[]> = new Map();

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
