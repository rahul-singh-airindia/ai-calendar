import { Component, Input, OnInit } from '@angular/core';
import { BiddingCalendarData } from '../../interface/bidding-calendar/biddibng-calendar.interface';

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent implements OnInit {
  @Input('device')
  device = 'desktop';
  @Input('date')
  date: Date = new Date();
  @Input('currentDate')
  currentDate: Date = new Date();
  @Input('dateEventMap')
  dateEventMap: Map<string, BiddingCalendarData[]> = new Map();
  @Input('selected')
  isSelected = false;

  isDialogVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }

  isToday(date: Date) {
    const today = new Date();

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isCurrentMonth(date: Date) {
    return (
      date.getMonth() === this.currentDate.getMonth() &&
      date.getFullYear() === this.currentDate.getFullYear()
    );
  }

  getEventCount(date: Date): number {
    return this.dateEventMap.get(date.toLocaleDateString())?.length || 0;
  }
}
