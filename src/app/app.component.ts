import { Component } from '@angular/core';
import data from 'src/assets/data/team_absence.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aiCalendar';
  teamAbsence = data;
}
