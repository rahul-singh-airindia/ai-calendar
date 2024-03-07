import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LearningCalendarData } from '../interface/learning-calendar/learning-calendar.interface';
import { Day } from '../interface/day.model';

@Component({
  selector: 'learning-calendar',
  templateUrl: './learning-calendar.component.html',
  styleUrls: ['./learning-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningCalendarComponent implements OnInit {
  @Input('font-family')
  fontFamily: string = '"Nunito Sans", sans-serif';
  @Input('width')
  width: string = '';
  @Input('height')
  height: string = '';

  @Input('currentDate') // yyyy-mm-dd'T'hh:mm:ss'Z'
  currentDateString: string = new Date().toISOString();
  @Input('learningCalendar')
  learningCalendar: LearningCalendarData[] = [];
  learningCalendarData: LearningCalendarData[] = [];

  @Output('selectedDate')
  getSelectedDate = new EventEmitter<string>();
  @Output('changedMonth')
  getChangedMonth = new EventEmitter<string>();

  currentDate: Date = new Date();
  selectedDate: Date = new Date();

  days: Day[] = [];
  dateEventMap: Map<string, LearningCalendarData[]> = new Map();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentDate = new Date(this.currentDateString);
    this.learningCalendarData = this.learningCalendar;
    this.generateCalendar(this.currentDate, true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.learningCalendar) {
      this.learningCalendarData = changes.learningCalendar.currentValue;
      this.generateCalendar(this.currentDate);
      this.cdr.detectChanges();
    }
  }

  checkSelectedDate(target: Date, date: Date): boolean {
    return (
      target.getDate() === date.getDate() &&
      target.getMonth() === date.getMonth() &&
      target.getFullYear() === date.getFullYear()
    );
  }

  setSelectedDate(date: Date): void {
    this.selectedDate = date;
  }

  generateCalendar(date: Date, select: boolean = false): void {
    this.days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const pastMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      const previousMonthDay = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        pastMonthLastDay.getDate() - i
      );

      this.days.unshift({
        date: previousMonthDay,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
      const selected = select && this.checkSelectedDate(currentDay, date);

      if (selected) {
        this.setSelectedDate(currentDay);
      }

      this.days.push({
        date: currentDay,
        events: [],
        isSelected:
          selected ||
          (!select &&
            currentDay.getDate() === this.selectedDate.getDate() &&
            currentDay.getMonth() === this.selectedDate.getMonth() &&
            currentDay.getFullYear() === this.selectedDate.getFullYear()),
        isCurrentMonth: true,
      });
    }

    const nextMonthFiller = this.days.length;

    for (let i = 1; i <= 42 - nextMonthFiller; i++) {
      const nextMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, i);

      this.days.push({
        date: nextMonthDay,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    this.populateEvents();
  }

  getStartedEvents(date: Date) {
    return this.learningCalendarData.filter((course) => {
      const courseStart = new Date(course.date);

      return (
        courseStart.getFullYear() === date.getFullYear() &&
        courseStart.getMonth() === date.getMonth() &&
        courseStart.getDate() === date.getDate()
      );
    });
  }

  populateEvents() {
    this.dateEventMap = new Map();

    for (const day of this.days) {
      const targetEvents = this.getStartedEvents(day.date);
      this.dateEventMap.set(day.date.toLocaleDateString(), targetEvents);
    }
  }

  previousMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );

    this.generateCalendar(this.currentDate);
    this.getChangedMonth.emit(this.currentDate.toISOString());
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );

    this.generateCalendar(this.currentDate);
    this.getChangedMonth.emit(this.currentDate.toISOString());
  }

  selectDay(day: Day): void {
    this.days.forEach((d) => (d.isSelected = false));
    day.isSelected = !day.isSelected;
    this.setSelectedDate(day.date);
    this.getSelectedDate.emit(this.selectedDate.toISOString());
  }
}
