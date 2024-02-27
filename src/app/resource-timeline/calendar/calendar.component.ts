import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean; // Added for selection functionality
  isCurrentMonth: boolean; // Added to disable past month dates
  events?: string[]; // Optional array for events
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() days: Day[] = [];
  @Output() selectDay = new EventEmitter<Day>();

  constructor() {}

  ngOnInit(): void {}

  handleSelectDay(day: Day) {
    this.selectDay.emit(day);
  }
}
