import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day } from '../../interface/day.model';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input('days')
  days: Day[] = [];
  @Input('resourceData')
  resourceData: ResourceData[] = [];
  @Input('dateEventMap')
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  constructor() {}

  ngOnInit(): void {}

  getDaysInCurrentMonth(): Day[] {
    return this.days.filter((day) => day.isCurrentMonth);
  }
}
