import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarGridComponent } from './resource-timeline/calendar-grid/calendar-grid.component';
import { CalendarMonthHeaderComponent } from './resource-timeline/calendar-month-header/calendar-month-header.component';
import { CalendarComponent } from './resource-timeline/calendar/calendar.component';
import { ResourceListItemComponent } from './resource-timeline/resource-list-item/resource-list-item.component';
import { ResourceListComponent } from './resource-timeline/resource-list/resource-list.component';
import { ResourceTimelineHeaderComponent } from './resource-timeline/resource-timeline-header/resource-timeline-header.component';
import { ResourceTimelineComponent } from './resource-timeline/resource-timeline.component';
import { DialogBoxComponent } from './resource-timeline/dialog-box/dialog-box.component';
import { CalendarCellComponent } from './resource-timeline/calendar-cell/calendar-cell.component';

@NgModule({
  declarations: [
    ResourceTimelineComponent,
    ResourceListComponent,
    ResourceListItemComponent,
    CalendarComponent,
    ResourceTimelineHeaderComponent,
    CalendarMonthHeaderComponent,
    CalendarGridComponent,
    DialogBoxComponent,
    CalendarCellComponent,
  ],
  exports: [ResourceTimelineComponent],
  imports: [CommonModule],
})
export class SharedModule {}
