import { Component } from '@angular/core';
import teamAbsenceData from 'src/assets/data/team_absence.json';
import leaveHolidayData from 'src/assets/data/holiday_calendar.json';
import learningCalendarData from 'src/assets/data/learning-management-publish-calendar.json';
import { LearningCalendarData } from './shared/ai-calendar/interface/learning-calendar/learning-calendar.interface';

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
  learningCalendar: LearningCalendarData[] = learningCalendarData.data;

  handleSelectedDate(date: string): void {
    const selectedDate = new Date(date);
    console.log('selected date: ', selectedDate);
  }

  handleChangedMonth(date: string): void {
    const changedMonth = new Date(date);
    console.log(
      'changed month: ',
      changedMonth.getMonth() + 1,
      changedMonth.getFullYear()
    );
  }
}
