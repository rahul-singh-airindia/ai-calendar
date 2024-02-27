import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private currentDate$: BehaviorSubject<Date>;
 
  constructor() {
    this.currentDate$ = new BehaviorSubject<Date>(new Date());
  }
 
  getDays(): Observable<Date> {
    return this.currentDate$.asObservable();
  }
 
  updateDays(newDate: Date): void {
    this.currentDate$.next(newDate);
  }
}