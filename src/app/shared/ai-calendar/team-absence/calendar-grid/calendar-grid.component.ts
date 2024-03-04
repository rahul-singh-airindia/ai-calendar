import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../../interface/day.model';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  @Input()
  days: Day[] = [];
  @Input('resourceData')
  resourceData: ResourceData[] = [];
  @Input('dateEventMap')
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  constructor() {}

  ngOnInit(): void {}
}
