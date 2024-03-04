import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Day } from '../interface/day.model';
import { ResourceData } from '../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'team-absence',
  templateUrl: './team-absence.component.html',
  styleUrls: ['./team-absence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAbsenceComponent implements OnInit {
  @Input('font-family')
  fontFamily: string = '"Nunito Sans", sans-serif';
  @Input('width')
  width: string = '100%';
  @Input('height')
  height: string = '100%';
  @Input('scale')
  scale: number = 1;

  @Input('resource')
  resource: ResourceData[] = [];
  @Input('teamLeavesHoliday')
  teamLeavesHoliday: TeamLeaveHolidayData[] = [];

  resourceData: ResourceData[] = [];
  teamLeavesHolidayData: TeamLeaveHolidayData[] = [];

  currentDate: Date = new Date();
  days: Day[] = [];
  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.resourceData = this.resource;
    this.teamLeavesHolidayData = this.teamLeavesHoliday;
    this.generateCalendar(this.currentDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resource || changes.teamLeavesHoliday) {
      this.resourceData = changes.resource.currentValue;
      this.teamLeavesHolidayData = changes.teamLeavesHoliday.currentValue;
      this.generateCalendar(this.currentDate);
      this.cdr.detectChanges();
    }
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
}
