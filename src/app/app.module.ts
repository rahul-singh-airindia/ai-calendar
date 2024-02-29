import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { MonthComponent } from 'src/app/leave-calendar/month/month.component';
import { HeaderComponent } from 'src/app/leave-calendar/header/header.component';
import { LeaveCalendarViewComponent } from './leave-calendar/leave-calendar-view/leave-calendar-view.component';
import { EventComponent } from './leave-calendar/event/event.component';

@NgModule({
  // declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  declarations: [
    AppComponent,
    MonthComponent,
    HeaderComponent,
    LeaveCalendarViewComponent,
    EventComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
