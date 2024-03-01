import { LeaveHolidayData } from './leave-holiday.interface';
import { Status } from './status.interface';

export interface HolidayCalendar {
  status: Status;
  data: {
    upcomingHolidayLeavesCalendarView: LeaveHolidayData[];
  };
}
