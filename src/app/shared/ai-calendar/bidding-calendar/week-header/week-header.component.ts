import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.scss'],
})
export class WeekHeaderComponent implements OnInit {
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  constructor() {}

  ngOnInit(): void {}
}
