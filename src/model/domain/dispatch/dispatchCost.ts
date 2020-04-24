import { TemplateDto } from "../templateDto";

export class DispatchCost extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public type?: string,
        public description?: string,
        public cost?: number) {
        super();
    }
}