import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';
import { CalendarMonthHeaderComponent } from './calendar-month-header/calendar-month-header.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { TeamAbsenceComponent } from './team-absence.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ResourceListModule } from './resource-list/resource-list.module';

@NgModule({
  declarations: [
    TeamAbsenceComponent,
    CalendarComponent,
    HeaderToolbarComponent,
    CalendarMonthHeaderComponent,
    CalendarGridComponent,
    DialogBoxComponent,
    CalendarCellComponent,
  ],
  exports: [TeamAbsenceComponent],
  imports: [CommonModule, ResourceListModule],
})
export class TeamAbsenceModule {}
