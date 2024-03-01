import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarModule } from './holiday-calendar/holiday-calendar.module';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { LearningCalendarModule } from './learning-calendar/learning-calendar.module';
import { LearningCalendarComponent } from './learning-calendar/learning-calendar.component';
import { TeamAbsenceModule } from './team-absence/team-absence.module';
import { TeamAbsenceComponent } from './team-absence/team-absence.component';

@NgModule({
  declarations: [],
  exports: [
    HolidayCalendarComponent,
    LearningCalendarComponent,
    TeamAbsenceComponent,
  ],
  imports: [
    CommonModule,
    HolidayCalendarModule,
    LearningCalendarModule,
    TeamAbsenceModule,
  ],
})
export class SharedModule {}
