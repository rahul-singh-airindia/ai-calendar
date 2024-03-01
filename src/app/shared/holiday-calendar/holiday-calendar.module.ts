import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayCalendarComponent } from './holiday-calendar.component';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { WeekHeaderComponent } from './week-header/week-header.component';

@NgModule({
  declarations: [
    HolidayCalendarComponent,
    CalendarGridComponent,
    CalendarEventComponent,
    DialogBoxComponent,
    CalendarCellComponent,
    HeaderToolbarComponent,
    WeekHeaderComponent,
  ],
  exports: [HolidayCalendarComponent],
  imports: [CommonModule],
})
export class HolidayCalendarModule {}
