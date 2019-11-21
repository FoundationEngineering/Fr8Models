import { MessageField } from "./messageField";

export class ErrorResponse {
    constructor(public error?: string, public message?: string, public detail?: Array<MessageField>){};

    public setDetail(aDetail: Array<MessageField>): void {
        this.detail = aDetail;
    }
}
