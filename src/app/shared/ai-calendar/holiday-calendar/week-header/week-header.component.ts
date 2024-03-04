import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.scss'],
})
export class WeekHeaderComponent implements OnInit {
  @Input('device')
  device: string = 'desktop';

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {}

  ngOnInit(): void {}
}
