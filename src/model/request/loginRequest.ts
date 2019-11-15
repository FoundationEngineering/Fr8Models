import { BaseRequest } from "./BaseRequest";
import { MessageField } from "../utils/messageField";

export class LoginRequest extends BaseRequest{
    public username: string;
    public password: string;
    public detail: Array<MessageField>;

    public validate(): boolean {
        this.detail = new Array();
        let isValid : boolean = true;
        if (!this.username || this.username.length<1) {
            isValid = false;
            this.detail.push(new MessageField("username","Input is required"));
        }
        if(!this.password || this.password.length<1) {
            isValid = false;
            this.detail.push(new MessageField("password","Input is required"));
        }
        return isValid;
    }
}
