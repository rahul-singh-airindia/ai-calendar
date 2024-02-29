import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../interface/day.model';
import { ResourceData } from '../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-resource-timeline',
  templateUrl: './resource-timeline.component.html',
  styleUrls: ['./resource-timeline.component.css'],
})
export class ResourceTimelineComponent implements OnInit {
  @Input('width')
  width: string = '';
  @Input('height')
  height: string = '';
  @Input('resourceData')
  resourceData: ResourceData[] = [];
  @Input('teamLeavesHolidayData')
  teamLeavesHolidayData: TeamLeaveHolidayData[] = [];

  currentDate: Date = new Date();
  days: Day[] = [];
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar(this.currentDate);
  }

  generateCalendar(date: Date): void {
    this.days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const pastMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      const previousMonthDay = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        pastMonthLastDay.getDate() - i
      );

      this.days.unshift({
        date: previousMonthDay,
        isToday: false,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
      const today = new Date();

      this.days.push({
        date: currentDay,
        isToday:
          currentDay.getDate() === today.getDate() &&
          currentDay.getMonth() === today.getMonth() &&
          currentDay.getFullYear() === today.getFullYear(),
        events: [],
        isSelected:
          currentDay.getDate() === today.getDate() &&
          currentDay.getMonth() === today.getMonth() &&
          currentDay.getFullYear() === today.getFullYear(),
        isCurrentMonth: true,
      });
    }

    const nextMonthFiller = this.days.length;

    for (let i = 1; i <= 48 - nextMonthFiller; i++) {
      const nextMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, i);

      this.days.push({
        date: nextMonthDay,
        isToday: false,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    this.populateEvents();
  }

  getStartedEvents(date: Date) {
    return this.teamLeavesHolidayData.filter((event) => {
      const eventStart = new Date(event.start);

      return (
        eventStart.getFullYear() === date.getFullYear() &&
        eventStart.getMonth() === date.getMonth() &&
        eventStart.getDate() === date.getDate()
      );
    });
  }

  populateEvents() {
    this.dateEventMap = new Map();

    for (const day of this.days) {
      const targetEvents = this.getStartedEvents(day.date);

      for (const event of targetEvents) {
        for (const resource of event.resourceIds) {
          const dateMap =
            this.dateEventMap.get(day.date.toLocaleDateString()) ?? new Map();
          const eventsForResource = dateMap.get(resource) ?? [];
          eventsForResource.push(event);
          dateMap.set(resource, eventsForResource);
          this.dateEventMap.set(day.date.toLocaleDateString(), dateMap);
        }
      }
    }
  }

  previousMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar(this.currentDate);
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar(this.currentDate);
  }

  selectDay(day: Day): void {
    this.days.forEach((d) => (d.isSelected = false)); // Deselect all days
    day.isSelected = !day.isSelected; // Toggle selection for the clicked day
  }
}
