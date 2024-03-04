import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  @Input('date')
  date: Date = new Date();
  @Input('resourceEvents')
  resourceEvents: TeamLeaveHolidayData[] = [];
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
}
