import { TemplateDto } from "./domain/templateDto";

// Use for generic KV storage in the backend
export class GenericKVStore extends TemplateDto {
    public static defaultKey = "Key";
    public static defaultType = "genericType";
    public static defaultValue = null;

    constructor(
        public keyString?: string,
        public valueType?: string,
        public jsonValue?: any
    ) { super(); }
}
