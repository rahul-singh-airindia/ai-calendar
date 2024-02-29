import { Component } from '@angular/core';
import data from 'src/assets/data/team_absence.json';
import { TeamAbsence } from './shared/interface/team-absence/team-absence.interface';
import { ResourceData } from './shared/interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from './shared/interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aiCalendar';
  teamAbsence: TeamAbsence = data;
  resourceData: ResourceData[] = this.teamAbsence.data.resourceData;
  teamLeavesHolidayData: TeamLeaveHolidayData[] =
    this.teamAbsence.data.teamLeavesHolidayData;
}
