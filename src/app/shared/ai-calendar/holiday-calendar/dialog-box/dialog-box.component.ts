import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  @Input()
  date: Date = new Date();

  @Input()
  leaveHolidayData: LeaveHolidayData[] = [];

  @Input()
  isDialogVisible: boolean = false;

  @Output()
  toggleDialogHandler = new EventEmitter<void>();

  toggleDialog() {
    this.toggleDialogHandler.emit();
  }

  handleDialogClick(event: MouseEvent) {
    event.stopPropagation();
  }

  titleCase(str: string) {
    return str.replace(
      /\b\w/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
  }

  getEventTitle(event: LeaveHolidayData) {
    if (!('status' in event.extendedProps)) {
      return event.title;
    }

    const leaveType = event.title;
    let leaveName = event.extendedProps.holidayLeaveName;

    if (leaveType.toLowerCase() === 'leave') {
      leaveName = leaveName.toLowerCase().replace(' leave', '');
    }

    return this.titleCase(leaveName);
  }

  getEventStatus(event: LeaveHolidayData) {
    const status = event.extendedProps?.status || 'all day';
    return this.titleCase(status.toLowerCase());
  }

  getLeaveStatus(event: LeaveHolidayData) {
    const status = event.extendedProps?.status || 'all-day';
    return status.replace(' ', '-').toLowerCase();
  }

  getEventContent(event: LeaveHolidayData) {
    if (!('status' in event.extendedProps)) {
      return event.extendedProps.holidayLeaveName;
    }

    return this.getEventStatus(event);
  }
}
