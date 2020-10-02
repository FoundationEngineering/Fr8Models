import { TemplateDto } from '../templateDto';
export class Leave extends TemplateDto {
    constructor(
        public timeRecordId?: number,
        public type?: String,
        public hours?: number,
    ) { 
        super();
    }
}
