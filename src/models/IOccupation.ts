import { DateTime } from "luxon"
import { Commute } from "./CommuteType";
import { OccupationType } from "./OccupationType";

export interface IOccupation {
  id: string;
  parentId?: string;
  title: string;
  type: OccupationType;
  location: string;
  company: string;
  commute: Commute;
  startDate: DateTime;
  endDate?: DateTime;
  image: string;
}
