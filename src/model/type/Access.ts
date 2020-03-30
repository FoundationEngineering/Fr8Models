import { AccessType } from "./AccessType";
import { PrivilegeType } from "./PrivilegeType";

export class Access {
    constructor(
        public accessType?: AccessType,
        public privelgeType?: PrivilegeType) { }
}