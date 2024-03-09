import { Component } from '@angular/core';

@Component({
  selector: 'app-week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.scss'],
})
export class WeekHeaderComponent {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
}
