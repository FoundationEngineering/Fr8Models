import { TemplateDto } from "../templateDto";

export class DispatchHistory extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public activity?: string) {
        super();
    }
}