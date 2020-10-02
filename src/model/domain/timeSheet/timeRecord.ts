import { Leave } from "./leave";

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
        public timeInOutJsonList?: {timeIn: Date, timeOut: Date}[],
        public hoursJsonList?: {day: String, hours: number}[],
    ) { }
}
