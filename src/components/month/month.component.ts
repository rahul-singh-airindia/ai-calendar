import { Component, OnInit  } from '@angular/core';
import { CalendarService } from '../header/calendar.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent  implements OnInit {
  currentDate: Date = new Date();
  monthName: string = '';
  daysInMonth: number = 0;
  firstDayOfWeek: number = 0;
  emptyDays: any[] = [];
  days: number[] = [];
 
  

  constructor(public calenderService: CalendarService){}

  ngOnInit(): void {
    this.calenderService.getDays().subscribe((data) =>{this.updateMonth(data);} );
  }
  private updateMonth(date: Date): void {
    this.currentDate = date;
    this.monthName = this.getMonthName(date);
    this.daysInMonth = this.getDaysInMonth(date);
    this.firstDayOfWeek = this.getFirstDayOfWeek(date);
    this.generateDays();
  }
  

  private getMonthName(date: Date): string {
    return date.toLocaleString('en-US', { month: 'long' });
  }

  private getDaysInMonth(date: Date): number {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDayOfMonth.getDate();
  }

  private getFirstDayOfWeek(date: Date): number {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDayOfMonth.getDay();
    
  }

  private generateDays(): void {
    this.emptyDays = Array(this.firstDayOfWeek).fill(null);
    this.days = Array.from({ length: this.daysInMonth }, (_, i) => i + 1);
  }

}
