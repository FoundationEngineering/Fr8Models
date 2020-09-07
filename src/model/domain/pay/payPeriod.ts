import { TemplateDto } from '../templateDto';
import { TimeRecord } from '../timeSheet/timeRecord';

export class PayPeriod extends TemplateDto {
    constructor(
        public fromDate?: Date,
        public toDate?: Date,
        public totalSeconds?: number,
        public type?: string,

        public dateTimeString?: string,
        public isSubmitted?: boolean,
        
        public timeRecordList?: TimeRecord[],
    ) {
        super();
    }
}
