import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTimelineComponent } from './resource-timeline.component';

describe('ResourceTimelineComponent', () => {
  let component: ResourceTimelineComponent;
  let fixture: ComponentFixture<ResourceTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
