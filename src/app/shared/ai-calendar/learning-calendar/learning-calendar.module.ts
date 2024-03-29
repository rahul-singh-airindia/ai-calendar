import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningCalendarComponent } from './learning-calendar.component';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { WeekHeaderComponent } from './week-header/week-header.component';

@NgModule({
  declarations: [
    LearningCalendarComponent,
    CalendarGridComponent,
    CalendarCellComponent,
    HeaderToolbarComponent,
    WeekHeaderComponent,
  ],
  exports: [LearningCalendarComponent],
  imports: [CommonModule],
})
export class LearningCalendarModule {}
