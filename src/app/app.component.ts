import { Component } from '@angular/core';
import teamAbsenceData from 'src/assets/data/team_absence.json';
import leaveHolidayData from 'src/assets/data/holiday_calendar.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aiCalendar';
  teamAbsence = teamAbsenceData;
  leaveHoliday = leaveHolidayData;
}
