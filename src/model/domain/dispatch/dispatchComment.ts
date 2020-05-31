import { TemplateDto } from "../templateDto";

export class DispatchComment extends  TemplateDto {
    constructor(
    public dispatchId?: number,
    public userId?: number,
    public userFullName?: string,
    public userCompanyName?: string,
    public comment?: string) {
        super();
    }
}
