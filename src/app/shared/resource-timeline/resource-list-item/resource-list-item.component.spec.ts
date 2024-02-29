import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListItemComponent } from './resource-list-item.component';

describe('ResourceListItemComponent', () => {
  let component: ResourceListItemComponent;
  let fixture: ComponentFixture<ResourceListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
