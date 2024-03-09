import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Day } from '../../interface/day.model';

@Component({
  selector: 'app-calendar-month-header',
  templateUrl: './calendar-month-header.component.html',
  styleUrls: ['./calendar-month-header.component.scss'],
})
export class CalendarMonthHeaderComponent {
  @Input() days: Day[] = [];

  @Output() selectDay = new EventEmitter<Day>();

  getCurrentMonthDays(): Day[] {
    return this.days.filter((day) => day.isCurrentMonth);
  }

  handleSelectDay(day: Day): void {
    this.selectDay.emit(day);
  }

  isToday(date: Date) {
    const today = new Date();

    return (
      date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear()
    );
  }
}
