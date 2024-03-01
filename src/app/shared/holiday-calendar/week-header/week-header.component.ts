import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.css'],
})
export class WeekHeaderComponent implements OnInit {
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {}

  ngOnInit(): void {}
}
