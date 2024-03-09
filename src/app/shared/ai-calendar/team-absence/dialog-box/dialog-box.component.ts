import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {
  @Input()
  date: Date = new Date();

  @Input()
  resourceEvents: TeamLeaveHolidayData[] = [];

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
}
