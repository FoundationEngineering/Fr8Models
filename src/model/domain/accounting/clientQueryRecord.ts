import { TemplateDto } from "../templateDto";
import { QueryDoc } from "./queryDoc";

export class ClientQueryRecord extends TemplateDto {
    constructor(
    public title?: string,
    public queryType?: string,
    public responseType?: string,
    public requestorName?: string,
    public assigneeName?: string,
    public clientName?: string,
    public requestMessage?: string,
    public responseMessage?: string,
    public comments?: {name: string, message: string, postDate: Date}, // JSON
    public clientId?: number,
    public queryDocumentIds?: number[],
    public responseDocumentIds?: number[],
    public queryDocs?: QueryDoc[],
    public status?: string,
    public isResolved?: boolean,
    public isOpened?: boolean,
    public isNonCompliant?: boolean,
    ) { super(); }
}
