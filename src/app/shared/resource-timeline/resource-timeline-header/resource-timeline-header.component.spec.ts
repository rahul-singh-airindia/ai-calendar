import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTimelineHeaderComponent } from './resource-timeline-header.component';

describe('ResourceTimelineHeaderComponent', () => {
  let component: ResourceTimelineHeaderComponent;
  let fixture: ComponentFixture<ResourceTimelineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceTimelineHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTimelineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
