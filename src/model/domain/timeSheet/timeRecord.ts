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
    ) { }
}
