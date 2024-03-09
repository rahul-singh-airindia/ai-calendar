import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent {
  @Input()
  device: string = 'desktop';

  @Input()
  currentDate: Date = new Date();

  @Output()
  previousMonth = new EventEmitter();

  @Output()
  nextMonth = new EventEmitter();

  handlePreviousMonth() {
    this.previousMonth.emit();
  }

  handleNextMonth() {
    this.nextMonth.emit();
  }
}
