import { ResourceData } from './resource-data.interface';
import { Status } from './status.interface';
import { TeamLeaveHolidayData } from './team-leave-holiday.interface';

export interface TeamAbsence {
  status: Status;
  data: {
    resourceData: ResourceData[];
    teamLeavesHolidayData: TeamLeaveHolidayData[];
    totalRecords: number;
  };
}
