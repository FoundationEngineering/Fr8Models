import { Leave } from "./leave";
import { TimeInOutWeekMap } from "../time/timeInOutWeekMap";
import { HoursWeekMap } from "../time/hoursWeekMap";

export class TimeRecord {
    constructor(
        public id?: number,
        public userId?: number,
        public companyId?: number,
        public parentCompanyId?: number,
        public createdAt?: Date,
        public updatedAt?: Date,

        public fullName?: String,
        public hours?: number,

        public timeIn?: Date,
        public timeOut?: Date,
        public totalSeconds?: number,
        
        public leaveList?: Leave[],

        public timeInOutJsonMap?: TimeInOutWeekMap,
        public hoursJsonMap?: HoursWeekMap
    ) { }
}
