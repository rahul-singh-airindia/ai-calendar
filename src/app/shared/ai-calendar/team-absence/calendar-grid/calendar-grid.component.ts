import { Component, Input } from '@angular/core';
import { Day } from '../../interface/day.model';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent {
  @Input()
  days: Day[] = [];

  @Input()
  resourceData: ResourceData[] = [];

  @Input()
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();
}
