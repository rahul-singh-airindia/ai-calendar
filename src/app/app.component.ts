import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: 'month' | 'week' | 'day' = 'month';

  onViewChange(newView: 'month' | 'week' | 'day') {
    this.currentView = newView;
  }

  onNavigation(action: 'prev' | 'next') {
    // Handle navigation logic here
    console.log(`${action} clicked`);
  }

}
