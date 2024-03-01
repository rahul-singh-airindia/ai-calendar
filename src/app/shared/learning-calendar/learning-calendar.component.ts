import { Component, Input, OnInit } from '@angular/core';
import { HolidayCalendar } from '../interface/holiday-calendar/holiday-calendar.interface';
import { LeaveHolidayData } from '../interface/holiday-calendar/leave-holiday.interface';
import { Day } from '../interface/day.model';

@Component({
  selector: 'learning-calendar',
  templateUrl: './learning-calendar.component.html',
  styleUrls: ['./learning-calendar.component.css'],
})
export class LearningCalendarComponent implements OnInit {
  @Input('width')
  width: string = '';
  @Input('height')
  height: string = '';
  @Input('leaveHoliday')
  leaveHoliday: HolidayCalendar = {} as HolidayCalendar;

  leaveHolidayData: LeaveHolidayData[] = [];
  currentDate: Date = new Date();
  days: Day[] = [];
  dateEventMap: Map<string, LeaveHolidayData[]> = new Map();

  constructor() {}

  ngOnInit(): void {
    this.leaveHolidayData =
      this.leaveHoliday.data.upcomingHolidayLeavesCalendarView;
    this.generateCalendar(this.currentDate);
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
    return this.leaveHolidayData.filter((event) => {
      const eventStart = new Date(event.start);

      return (
        eventStart.getFullYear() === date.getFullYear() &&
        eventStart.getMonth() === date.getMonth() &&
        eventStart.getDate() === date.getDate()
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
