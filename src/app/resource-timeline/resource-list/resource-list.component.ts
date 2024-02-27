import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
})
export class ResourceListComponent implements OnInit {
  lists = [
    {
      name: 'Auditorium A',
      item: [{ name: 'item 1' }, { name: 'item 2' }],
    },
    {
      name: 'Auditorium B',
    },
    {
      name: 'Auditorium C',
      item: [{ name: 'item 1' }, { name: 'item 2' }],
    },
  ];

  constructor() {}

  hasNestedItems(item: any): boolean {
    return item?.item?.length > 0;
  }

  ngOnInit(): void {}
}
