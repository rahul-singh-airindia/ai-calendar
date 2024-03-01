import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent implements OnInit {
  @Input('currentDate') currentDate: Date = new Date();
  @Output('previousMonth') previousMonth = new EventEmitter();
  @Output('nextMonth') nextMonth = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handlePreviousMonth() {
    this.previousMonth.emit();
  }

  handleNextMonth() {
    this.nextMonth.emit();
  }
}
