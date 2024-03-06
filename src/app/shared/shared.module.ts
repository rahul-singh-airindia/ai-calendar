import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiddingCalendarModule } from './ai-calendar/bidding-calendar/bidding-calendar.module';
import { BiddingCalendarComponent } from './ai-calendar/bidding-calendar/bidding-calendar.component';
import { HolidayCalendarModule } from './ai-calendar/holiday-calendar/holiday-calendar.module';
import { HolidayCalendarComponent } from './ai-calendar/holiday-calendar/holiday-calendar.component';
import { LearningCalendarModule } from './ai-calendar/learning-calendar/learning-calendar.module';
import { LearningCalendarComponent } from './ai-calendar/learning-calendar/learning-calendar.component';
import { TeamAbsenceModule } from './ai-calendar/team-absence/team-absence.module';
import { TeamAbsenceComponent } from './ai-calendar/team-absence/team-absence.component';

@NgModule({
  declarations: [],
  exports: [
    BiddingCalendarComponent,
    HolidayCalendarComponent,
    LearningCalendarComponent,
    TeamAbsenceComponent,
  ],
  imports: [
    CommonModule,
    BiddingCalendarModule,
    HolidayCalendarModule,
    LearningCalendarModule,
    TeamAbsenceModule,
  ],
})
export class SharedModule {}
