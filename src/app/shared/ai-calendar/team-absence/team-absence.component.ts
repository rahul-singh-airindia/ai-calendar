import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Day } from '../interface/day.model';
import { ResourceData } from '../interface/team-absence/resource-data.interface';
import { TeamLeaveHolidayData } from '../interface/team-absence/team-leave-holiday.interface';

@Component({
  selector: 'app-calendar-team-absence',
  templateUrl: './team-absence.component.html',
  styleUrls: ['./team-absence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAbsenceComponent implements OnInit, OnChanges {
  @Input()
  fontFamily: string = '"Nunito Sans", sans-serif';

  @Input()
  width: string = '100%';

  @Input()
  height: string = '100%';

  @Input()
  scale: number = 1;

  @Input()
  resource: ResourceData[] = [];

  @Input()
  teamLeavesHoliday: TeamLeaveHolidayData[] = [];

  resourceData: ResourceData[] = [];

  teamLeavesHolidayData: TeamLeaveHolidayData[] = [];

  currentDate: Date = new Date();

  days: Day[] = [];

  dateEventMap: Map<string, Map<string, TeamLeaveHolidayData[]>> = new Map();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.resourceData = this.resource;
    this.teamLeavesHolidayData = this.getLeaveHolidays(this.teamLeavesHoliday);
    this.generateCalendar(this.currentDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.resource
      || changes.teamLeavesHoliday
      || changes.teamLeavesHolidayData
    ) {
      this.resourceData = changes.resource.currentValue;
      this.teamLeavesHolidayData = this.getLeaveHolidays(
        changes.teamLeavesHoliday.currentValue,
      );
      this.generateCalendar(this.currentDate);
      this.cdr.detectChanges();
    }
  }

  getLeaveHolidays(
    leaveHoliday: TeamLeaveHolidayData[],
  ): TeamLeaveHolidayData[] {
    const partedEvents: TeamLeaveHolidayData[] = [];

    const formattedEvents = leaveHoliday.filter((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      const eventDuration = parseInt(event.extendedProps.duration, 10);

      if (eventStart.getDay() + eventDuration > 6) {
        const newDuration = 6 - eventStart.getDay() + 1;

        const updatedEvent = {
          ...event,
          end: new Date(
            eventStart.getFullYear(),
            eventStart.getMonth(),
            eventStart.getDate() + newDuration,
          )
            .toISOString()
            .split('T')[0],
          extendedProps: {
            ...event.extendedProps,
            duration: newDuration.toString(),
          },
        };

        partedEvents.push(updatedEvent);

        if (![0, 6].includes(eventEnd.getDay()) && eventEnd.getDay() > 0) {
          const partedEvent = {
            ...event,
            start: new Date(
              eventStart.getFullYear(),
              eventStart.getMonth(),
              eventEnd.getDate() + 1 - (eventDuration - newDuration - 1),
            )
              .toISOString()
              .split('T')[0],
            extendedProps: {
              ...event.extendedProps,
              duration: (eventDuration - newDuration).toString(),
            },
          };

          partedEvents.push(partedEvent);
        }

        return false;
      }

      return true;
    });

    const targetEvents = [...formattedEvents, ...partedEvents].map((event) => {
      const eventName = event.extendedProps.holidayLeaveName.toLowerCase();

      if (
        ['casual leave', 'privilege leave', 'sick leave'].includes(eventName)
      ) {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);
        const eventDuration = parseInt(event.extendedProps.duration, 10);

        if (eventEnd.getDay() === 6) {
          return {
            ...event,
            extendedProps: {
              ...event.extendedProps,
              duration: (eventDuration - 1).toString(),
            },
          };
        }

        if (eventStart.getDay() === 0 && eventDuration > 1) {
          return {
            ...event,
            start: new Date(
              eventStart.getFullYear(),
              eventStart.getMonth(),
              eventStart.getDate() + 2,
            )
              .toISOString()
              .split('T')[0],
            extendedProps: {
              ...event.extendedProps,
              duration: (eventDuration - 1).toString(),
            },
          };
        }
      }

      return event;
    });

    return targetEvents.filter((event) => {
      const eventStart = new Date(event.start);
      const leaveName = event.extendedProps.holidayLeaveName.toLowerCase();
      return !(
        [0, 6].includes(eventStart.getDay())
        && ['casual leave', 'privilege leave', 'sick leave'].includes(leaveName)
      );
    });
  }

  generateCalendar(date: Date): void {
    this.days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const pastMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);

    for (let i = 0; i < firstDay.getDay(); i += 1) {
      const previousMonthDay = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        pastMonthLastDay.getDate() - i,
      );

      this.days.unshift({
        date: previousMonthDay,
        events: [],
        isSelected: false,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i += 1) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
      const today = new Date();

      this.days.push({
        date: currentDay,
        events: [],
        isSelected:
          currentDay.getDate() === today.getDate()
          && currentDay.getMonth() === today.getMonth()
          && currentDay.getFullYear() === today.getFullYear(),
        isCurrentMonth: true,
      });
    }

    const nextMonthFiller = this.days.length;

    for (let i = 1; i <= 48 - nextMonthFiller; i += 1) {
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
        eventStart.getFullYear() === date.getFullYear()
        && eventStart.getMonth() === date.getMonth()
        && eventStart.getDate() === date.getDate()
      );
    });
  }

  populateEvents() {
    this.dateEventMap = new Map();

    for (const day of this.days) {
      const targetEvents = this.getStartedEvents(day.date);

      for (const event of targetEvents) {
        for (const resource of event.resourceIds) {
          const dateMap = this.dateEventMap.get(day.date.toLocaleDateString()) ?? new Map();
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
      1,
    );

    this.generateCalendar(this.currentDate);
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1,
    );

    this.generateCalendar(this.currentDate);
  }
}
