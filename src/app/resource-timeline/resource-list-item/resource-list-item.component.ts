import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.css']
})
export class ResourceListItemComponent implements OnInit {
  @Input("itemName") data: string = '';
  @Input("isCollapsible") isCollapsible: boolean = false;

  isCollapsed = true;

  handleCollapse() {
    if (this.isCollapsible) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
