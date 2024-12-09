import { DateTime } from "luxon";
import { IOccupation } from "../models/IOccupation";
import { OccupationType } from "../models/IOccupationType";

export const INFO_ENTRIES: IOccupation[] = [
  {
    id: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    type: OccupationType.Employment,
    title: "Full Stack Developer, DevOps Architect",
    company: "Universal Logistics Holdings",
    location: "Warren, MI",
    commute: "Onsite",
    startDate: DateTime.utc(2023, 6, 1),
    image: "assets/universal-logistics-logo.png",
  },
  {
    id: "8CBBCA55-06CF-4638-86B5-58F54F782563",
    type: OccupationType.Employment,
    title: "TRACK Rotational Program",
    company: "General Motors",
    location: "Warren, MI",
    commute: "Hybrid",
    startDate: DateTime.utc(2022, 1, 1),
    endDate: DateTime.utc(2023, 6, 1),
    image: "assets/gm-logo.png",
  },
  {
    id: "4798E060-30BC-4E65-B200-9B7CF9090DFC",
    parentId: "8CBBCA55-06CF-4638-86B5-58F54F782563",
    type: OccupationType.Employment,
    title: "Platform System Engineer",
    company: "General Motors",
    location: "Warren, MI",
    commute: "Hybrid",
    startDate: DateTime.utc(2023, 5, 1),
    endDate: DateTime.utc(2023, 6, 1),
    image: "assets/gm-logo.png",
  },
  {
    id: "4798E060-30BC-4E65-B200-9B7CF9090DFC",
    parentId: "8CBBCA55-06CF-4638-86B5-58F54F782563",
    type: OccupationType.Employment,
    title: "Platform System Engineer",
    company: "General Motors",
    location: "Warren, MI",
    commute: "Hybrid",
    startDate: DateTime.utc(2023, 5, 1),
    endDate: DateTime.utc(2023, 6, 1),
    image: "assets/gm-logo.png",
  },
]
