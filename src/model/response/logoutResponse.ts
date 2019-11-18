import { MessageField } from "../utils/messageField";
export class LogoutResponse {
    constructor(public username?: string, public userID?: number, public detail?: Array<MessageField>){ }
}
