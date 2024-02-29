import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonthComponent } from 'src/app/leave-calendar/month/month.component';
import { HeaderComponent } from 'src/app/leave-calendar/header/header.component';

import { ResourceTimelineComponent } from './resource-timeline/resource-timeline.component';
import { ResourceListComponent } from './resource-timeline/resource-list/resource-list.component';
import { ResourceListItemComponent } from './resource-timeline/resource-list-item/resource-list-item.component';
import { CalendarComponent } from './resource-timeline/calendar/calendar.component';
import { ResourceTimelineHeaderComponent } from './resource-timeline/resource-timeline-header/resource-timeline-header.component';
import { CalendarMonthHeaderComponent } from './resource-timeline/calendar-month-header/calendar-month-header.component';
import { CalendarGridComponent } from './resource-timeline/calendar-grid/calendar-grid.component';
import { LeaveCalendarViewComponent } from './leave-calendar/leave-calendar-view/leave-calendar-view.component';
import { EventComponent } from './leave-calendar/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    HeaderComponent,
    ResourceTimelineComponent,
    ResourceListComponent,
    ResourceListItemComponent,
    CalendarComponent,
    ResourceTimelineHeaderComponent,
    CalendarMonthHeaderComponent,
    CalendarGridComponent,
    LeaveCalendarViewComponent,
    EventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
