import { Component, OnInit } from '@angular/core';

interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean; // Added for selection functionality
  isCurrentMonth: boolean; // Added to disable past month dates
  events?: string[]; // Optional array for events
}

@Component({
  selector: 'app-resource-timeline',
  templateUrl: './resource-timeline.component.html',
  styleUrls: ['./resource-timeline.component.css'],
})
export class ResourceTimelineComponent implements OnInit {
  currentDate: Date = new Date(); // Represents the currently displayed month
  days: Day[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar(this.currentDate);
  }

  generateCalendar(date: Date): void {
    this.days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const pastMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    // Add days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const previousMonthDay = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        pastMonthLastDay.getDate() - i
      );

      this.days.unshift({
        date: previousMonthDay,
        isToday: false,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    // Add days for the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), i);

      this.days.push({
        date: currentDay,
        isToday: currentDay.getDate() === new Date().getDate(),
        events: [],
        isSelected: currentDay.getDate() === new Date().getDate(),
        isCurrentMonth: true,
      });
    }

    const nextMonthFiller = this.days.length;

    // Add days after the last day of the month
    for (let i = 1; i <= 48 - nextMonthFiller; i++) {
      const nextMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, i);

      this.days.push({
        date: nextMonthDay,
        isToday: false,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
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
    this.days.forEach((d) => (d.isSelected = false)); // Deselect all days
    day.isSelected = !day.isSelected; // Toggle selection for the clicked day
  }
}
