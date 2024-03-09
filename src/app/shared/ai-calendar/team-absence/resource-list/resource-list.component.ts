import { Component, Input } from '@angular/core';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  @Input() resourceData: ResourceData[] = [];

  hasResources(resource: ResourceData): boolean {
    return (resource?.participants?.length ?? 0) > 0;
  }
}
