import { MessageField } from "../utils/messageField";
export abstract class BaseRequest {
    abstract validate(): boolean;
}
