import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../header/calendar.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  currentDate: Date = new Date();
  monthName: string = '';
  daysInMonth: number = 0;
  firstDayOfWeek: number = 0;
  emptyDays: any[] = [];
  days: { value: number; monthType: string }[] = [];

  constructor(public calenderService: CalendarService) {}

  ngOnInit(): void {
    this.calenderService.getDays().subscribe((data) => {
      this.updateMonth(data);
    });
  }
  private updateMonth(date: Date): void {
    this.currentDate = date;
    this.monthName = this.getMonthName(date);
    this.daysInMonth = this.getDaysInMonth(date);
    this.firstDayOfWeek = this.getFirstDayOfWeek(date);
    this.generateDays();
  }

  private getMonthName(date: Date): string {
    return date.toLocaleString('en-US', { month: 'long' });
  }

  private getDaysInMonth(date: Date): number {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDayOfMonth.getDate();
  }

  private getFirstDayOfWeek(date: Date): number {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDayOfMonth.getDay();
  }

  private generateDays(): void {
    this.days = [];

    // Calculate the number of days from the previous month to display
    const daysFromPrevMonth = this.firstDayOfWeek > 0 ? this.firstDayOfWeek : 7;

    // Calculate the number of days from the next month to display
    const daysInCurrentAndPrevMonths =
      this.days.length + daysFromPrevMonth + this.daysInMonth;
    const daysFromNextMonth =
      Math.ceil(daysInCurrentAndPrevMonths / 7) * 7 -
      daysInCurrentAndPrevMonths;

    // Populate the days array with the dates from the previous month
    const prevMonthDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      0
    );
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const day = prevMonthDate.getDate() - i + 1;
      this.days.push({ value: day, monthType: 'prev' });
    }

    // Populate the days array with the dates from the current month
    for (let i = 1; i <= this.daysInMonth; i++) {
      this.days.push({ value: i, monthType: 'current' });
    }

    // Populate the days array with the numbers from the next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
      this.days.push({ value: i, monthType: 'next' });
    }
  }
}
