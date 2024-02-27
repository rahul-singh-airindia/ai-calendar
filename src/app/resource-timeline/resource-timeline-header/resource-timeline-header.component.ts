import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resource-timeline-header',
  templateUrl: './resource-timeline-header.component.html',
  styleUrls: ['./resource-timeline-header.component.css'],
})
export class ResourceTimelineHeaderComponent implements OnInit {
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
