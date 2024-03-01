import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveHolidayData } from '../../interface/holiday-calendar/leave-holiday.interface';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent implements OnInit {
  @Input('date')
  date: Date = new Date();
  @Input('leaveHolidayData')
  leaveHolidayData: LeaveHolidayData[] = [];
  @Input('isDialogVisible')
  isDialogVisible: boolean = false;

  @Output('toggleDialog')
  toggleDialogHandler = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  toggleDialog() {
    this.toggleDialogHandler.emit();
  }

  handleDialogClick(event: MouseEvent) {
    event.stopPropagation();
  }

  titleCase(str: string) {
    return str.replace(
      /\b\w/g,
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  getEventTitle(event: LeaveHolidayData) {
    if (!event.extendedProps.hasOwnProperty('status')) {
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
    if (!event.extendedProps.hasOwnProperty('status')) {
      return event.extendedProps.holidayLeaveName;
    }

    return this.getEventStatus(event);
  }
}
