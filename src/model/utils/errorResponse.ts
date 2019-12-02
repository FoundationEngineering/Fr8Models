import { MessageField } from "./messageField";

export class ErrorResponse {
    constructor(public error?: string, public message?: string, public detail?: Array<MessageField>){};
}
