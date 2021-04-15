import { TemplateDto } from '../templateDto';

export class SignOutRecord extends TemplateDto {
    constructor(
        public dayCode?: string,
        public timeRecordId?: number,
        public pairId?: number,
        public timeOut?: Date,
    ) {
        super();
    }
}
