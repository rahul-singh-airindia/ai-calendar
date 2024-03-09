import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.scss'],
})
export class WeekHeaderComponent {
  @Input()
  device: string = 'desktop';

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}
