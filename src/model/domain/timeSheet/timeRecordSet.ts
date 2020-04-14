import { TimeRecord } from "./timeRecord";
import { TotalTimeRecord } from "./totalTimeRecord";

export class TimeRecordSet {
    constructor(
        public id?: number,
        public userId?: number,
        public companyId?: number,
        public parentCompanyId?: number,
        public createdAt?: Date,
        public updatedAt?: Date,

        public timeRecordList?: TimeRecord[],
        public totalTimeRecordList?: TotalTimeRecord[],
        ) { }
}