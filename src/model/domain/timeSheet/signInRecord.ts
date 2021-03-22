import { TemplateDto } from '../templateDto';

export class SignInRecord extends TemplateDto {
    constructor(
        public dayCode?: string,
        public timeRecordId?: number,
        public timeIn?: Date,
    ) {
        super();
    }
}
