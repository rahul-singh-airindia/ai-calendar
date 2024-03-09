import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { Day } from '../../interface/day.model';
import { LearningCalendarData } from '../../interface/learning-calendar/learning-calendar.interface';

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent {
  @Input()
  days: Day[] = [];

  @Input()
  currentDate: Date = new Date();

  @Input()
  dateEventMap: Map<string, LearningCalendarData[]> = new Map();

  @Output()
  selectDay = new EventEmitter<Day>();

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth()
      && date.getFullYear() === this.currentDate.getFullYear()
    );
  }

  handleSelectDay(day: Day): void {
    this.selectDay.emit(day);
  }
}
