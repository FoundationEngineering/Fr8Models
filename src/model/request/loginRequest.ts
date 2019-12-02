import { BaseRequest } from "./BaseRequest";
import { MessageField } from "../utils/messageField";

export class LoginRequest {
    constructor(public username?: string, public password?: string, public detail?: Array<MessageField>){};
}
