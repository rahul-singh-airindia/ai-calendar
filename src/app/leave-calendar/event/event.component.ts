import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  getTitleColor(status: string): string {
    switch (status) {
      case 'pending':
        return '#ff8c00'; // Color for pending status
      case 'approved':
        return '#17732b'; // Color for approved status
      case 'all day':
        return '#952391'; // Color for all day status
      default:
        return ''; // Default color
    }
  }
  

}
