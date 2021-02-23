import { TemplateDto } from "../templateDto";

export class QueryDoc extends TemplateDto {
    public static TYPE = {
        REQUEST: 'type-request',
        RESPONSE: 'type-response'
    };

    constructor(
        public queryId?: number,
        public name?: string,
        public source?: number,
        public mimetype?: string,
        public type?: string,
        public dataArray?: Uint8Array,
        public data?: Blob) {
        super();
    }
} 
