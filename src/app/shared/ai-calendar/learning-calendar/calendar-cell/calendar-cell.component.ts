import { Component, Input } from '@angular/core';
import { LearningCalendarData } from '../../interface/learning-calendar/learning-calendar.interface';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent {
  @Input()
  device = 'desktop';

  @Input()
  date: Date = new Date();

  @Input()
  currentDate: Date = new Date();

  @Input()
  dateEventMap: Map<string, LearningCalendarData[]> = new Map();

  @Input()
  isSelected = false;

  isDialogVisible = false;

  toggleDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }

  isToday(date: Date) {
    const today = new Date();

    return (
      date.getDate() === today.getDate()
      && date.getMonth() === today.getMonth()
      && date.getFullYear() === today.getFullYear()
    );
  }

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth()
      && date.getFullYear() === this.currentDate.getFullYear()
    );
  }

  getEventCount(date: Date): number {
    return this.dateEventMap.get(date.toLocaleDateString())?.length || 0;
  }
}
