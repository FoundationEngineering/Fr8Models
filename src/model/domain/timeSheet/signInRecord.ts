import { TemplateDto } from '../templateDto';

export class SignInRecord extends TemplateDto {
    constructor(
    public timeRecordId?: number,
    public timeIn?: Date,
    ) {
        super();
    }
}
