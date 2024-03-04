import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
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
  @Input('scale')
  scale: number = 1;

  @Input('learningCalendar')
  learningCalendar: LearningCalendarData[] = [];

  learningCalendarData: LearningCalendarData[] = [];

  currentDate: Date = new Date();
  days: Day[] = [];
  dateEventMap: Map<string, LearningCalendarData[]> = new Map();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.learningCalendarData = this.learningCalendar;
    this.generateCalendar(this.currentDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resource) {
      this.learningCalendarData = changes.learningCalendar.currentValue;
      this.generateCalendar(this.currentDate);
      this.cdr.detectChanges();
    }
  }

  generateCalendar(date: Date): void {
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
      const today = new Date();

      this.days.push({
        date: currentDay,
        events: [],
        isSelected:
          currentDay.getDate() === today.getDate() &&
          currentDay.getMonth() === today.getMonth() &&
          currentDay.getFullYear() === today.getFullYear(),
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
      const courseStart = new Date(course.courseDate);

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

    console.log(this.dateEventMap);
  }

  previousMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );

    this.generateCalendar(this.currentDate);
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );

    this.generateCalendar(this.currentDate);
  }

  selectDay(day: Day): void {
    this.days.forEach((d) => (d.isSelected = false));
    day.isSelected = !day.isSelected;
  }
}
