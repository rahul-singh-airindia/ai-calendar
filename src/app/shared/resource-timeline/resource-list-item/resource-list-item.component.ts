import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';

@Component({
  selector: 'resource-timeline-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css'],
})
export class ResourceListItemComponent implements OnInit {
  @Input('resource') resource: ResourceData = {} as ResourceData;
  @Input('itemName') data: string = '';
  @Input('isCollapsible') isCollapsible: boolean = false;

  isCollapsed = true;

  getTitleInitials(title: string) {
    if (!title || title.trim() === '') {
      return '';
    }

    const words = title.trim().split(/\s+/);
    let initials = '';

    for (const word of words) {
      initials += word.charAt(0).toUpperCase();
    }

    return initials;
  }

  handleCollapse() {
    if (this.isCollapsible) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
