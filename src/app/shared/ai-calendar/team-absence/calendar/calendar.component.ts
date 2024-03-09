import { Component, Input } from '@angular/core';
import { Day } from '../../interface/day.model';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @Input()
  days: Day[] = [];

  @Input()
  resourceData: ResourceData[] = [];

  @Input()
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  getDaysInCurrentMonth(): Day[] {
    return this.days.filter((day) => day.isCurrentMonth);
  }
}
