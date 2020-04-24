import { TemplateDto } from "../templateDto";

export class DispatchNote extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public username?: number,
        public companyName?: number,
        public note?: string) {
        super();
    }
}