import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAbsenceComponent } from './team-absence.component';

describe('TeamAbsenceComponent', () => {
  let component: TeamAbsenceComponent;
  let fixture: ComponentFixture<TeamAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamAbsenceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
