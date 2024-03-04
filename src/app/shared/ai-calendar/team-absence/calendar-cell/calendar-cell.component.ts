import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TeamLeaveHolidayData } from '../../interface/team-absence/team-leave-holiday.interface';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent implements OnInit {
  @Input('date')
  date: Date = new Date();
  @Input('resource')
  resource: ResourceData = {} as ResourceData;
  @Input('dateEventMap')
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  isDialogVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDialog() {
    this.isDialogVisible = !this.isDialogVisible;
  }

  getResourceEvents(date: Date, resourceId: string): TeamLeaveHolidayData[] {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    if (!dateEvents) return [];
    const resourceEvents = dateEvents?.get(resourceId);
    if (!resourceEvents) return [];
    return resourceEvents;
  }

  getResourceEventsCount(date: Date, resource: string) {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    const resourceEvents = dateEvents?.get(resource);
    return resourceEvents?.length || 0;
  }

  getResourceTitle(date: Date, resource: string): string {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    if (!dateEvents) return '';
    const resourceEvents = dateEvents?.get(resource);
    if (!resourceEvents) return '';
    return resourceEvents[0].title;
  }

  getResourceContent(date: Date, resource: string): string {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    if (!dateEvents) return '';
    const resourceEvents = dateEvents?.get(resource);
    if (!resourceEvents) return '';
    return resourceEvents[0].extendedProps.holidayLeaveName;
  }

  getResourceDuration(date: Date, resource: string): number {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    if (!dateEvents) return 1;
    const resourceEvents = dateEvents?.get(resource);
    if (!resourceEvents) return 1;
    return parseInt(resourceEvents[0].extendedProps.duration);
  }

  checkValidEvent(date: Date, resource: string) {
    const formatedDate = date.toLocaleDateString();
    const dateEvents = this.dateEventMap.get(formatedDate);
    if (!dateEvents) return '';
    const resourceEvents = dateEvents?.get(resource);
    if (!resourceEvents) return '';
    return resourceEvents.length > 0;
  }

  px2em(px: number, base: number = 16): number {
    return px / base;
  }

  getEventTileWidth(date: Date, resourceId: string): string {
    const eventDuration = this.getResourceDuration(date, resourceId);
    const emValue = this.px2em(eventDuration * 48 - 27);
    return emValue + 'em';
  }
}
