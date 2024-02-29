import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../../interface/day.model';

@Component({
  selector: 'resource-timeline-calendar-month-header',
  templateUrl: './calendar-month-header.component.html',
  styleUrls: ['./calendar-month-header.component.css'],
})
export class CalendarMonthHeaderComponent implements OnInit {
  @Input() days: Day[] = [];
  @Output() selectDay = new EventEmitter<Day>();

  constructor() {}

  ngOnInit(): void {}

  getCurrentMonthDays(): Day[] {
    return this.days.filter((day) => day.isCurrentMonth);
  }

  handleSelectDay(day: Day): void {
    this.selectDay.emit(day);
  }
}
