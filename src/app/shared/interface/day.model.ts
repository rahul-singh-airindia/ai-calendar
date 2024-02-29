import { Event } from './event.model';

export interface Day {
  date: Date;
  isToday: boolean;
  isSelected: boolean; // Added for selection functionality
  isCurrentMonth: boolean; // Added to disable past month dates
  events?: Event[]; // Optional array for events
}
