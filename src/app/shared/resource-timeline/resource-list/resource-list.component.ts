import { Component, Input, OnInit } from '@angular/core';
import { ResourceData } from '../../interface/team-absence/resource-data.interface';

@Component({
  selector: 'resource-timeline-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
})
export class ResourceListComponent implements OnInit {
  @Input() resourceData: ResourceData[] = [];

  constructor() {}

  hasResources(resource: ResourceData): boolean {
    return (resource?.participants?.length ?? 0) > 0;
  }

  ngOnInit(): void {}
}
