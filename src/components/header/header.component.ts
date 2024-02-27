import { Component, EventEmitter, Output } from '@angular/core';
import { CalendarService } from './calendar.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() viewChange = new EventEmitter<'month' | 'week' | 'day'>();
  @Output() navigation =new EventEmitter<'prev' | 'next'>();
 
  view: 'month' | 'week' | 'day' = 'month';
  currentDate: Date = new Date();
 
  constructor(private calenderService: CalendarService){
  }
 
 
  changeView(newView: 'month' | 'week' | 'day') {
    this.view = newView;
    this.viewChange.emit(newView);
  }
 
  prev() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.calenderService.updateDays(this.currentDate )
    this.navigation.emit('prev');
  }
 
  next() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.calenderService.updateDays(this.currentDate )
    this.navigation.emit('next');
  }
 
}
