import { Component } from '@angular/core';
import teamAbsenceData from 'src/assets/data/team_absence.json';
import leaveHolidayData from 'src/assets/data/holiday_calendar.json';
import learningCalendarData from 'src/assets/data/learning-management-publish-calendar.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aiCalendar';
  teamAbsence = teamAbsenceData;
  resource = teamAbsenceData.data.resourceData;
  teamLeavesHoliday = teamAbsenceData.data.teamLeavesHolidayData;
  leaveHoliday = leaveHolidayData;
  learningCalendar = learningCalendarData.data.courseData;
}
