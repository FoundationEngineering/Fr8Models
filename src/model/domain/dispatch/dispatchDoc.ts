import { TemplateDto } from "../templateDto";

export class DispatchDoc extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public name?: string,
        public source?: string,
        public mimetype?: string,
        public dataArray?: Uint8Array,
        public data?: Blob) {
        super();
    }
}
