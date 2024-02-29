import { Component, EventEmitter, Output } from '@angular/core';
import { CalendarService } from './calendar.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  view: 'month' | 'week' | 'day' = 'month';
  currentDate: Date = new Date();
 
  constructor(private calenderService: CalendarService){
  }
 
  prev() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.calenderService.updateDays(this.currentDate )
  }
 
  next() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.calenderService.updateDays(this.currentDate )
  }
 
}
