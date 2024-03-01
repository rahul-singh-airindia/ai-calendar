import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceListItemComponent } from './list-item/list-item.component';
import { ResourceListComponent } from './resource-list.component';

@NgModule({
  declarations: [ResourceListItemComponent, ResourceListComponent],
  exports: [ResourceListComponent],
  imports: [CommonModule],
})
export class ResourceListModule {}
