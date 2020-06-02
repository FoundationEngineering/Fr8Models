import { TemplateDto } from "../templateDto";

export class DispatchDoc extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public name?: string,
        public source?: string,
        public data?: Blob) {
        super();
    }
}
