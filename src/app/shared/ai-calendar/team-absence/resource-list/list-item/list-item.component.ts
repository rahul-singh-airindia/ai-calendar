import { Component, Input } from '@angular/core';
import { ResourceData } from '../../../interface/team-absence/resource-data.interface';

@Component({
  selector: 'app-resource-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ResourceListItemComponent {
  @Input()
  resource: ResourceData = {} as ResourceData;

  @Input()
  isCollapsible: boolean = false;

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
}
