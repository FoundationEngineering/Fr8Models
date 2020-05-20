import { TemplateDto } from "./templateDto";
import { User } from "./user";
import { Access } from "../type/Access";

export class UserRole extends TemplateDto {
    public static ROLE_TYPE = {    
        DRIVER: {
            short: 'drv',
            long: 'DRIVER',
            label: 'Driver',
        },
        DISPATCHER: {
            short: 'disp',
            long: 'DISPATCHER',
            label: 'Dispatcher',
        },
        DISPATCHER_ADMIN: {
            short: 'disp',
            long: 'DISPATCHER_ADMIN',
            label: 'Dispatcher Admin',
        },
        CUSTOMER: {
            short: 'cust',
            long: 'CUSTOMER',
            label: 'Customer',
        },
        ADMIN: {
            short: 'adm',
            long: 'ADMIN',
            label: 'Admin',
        },
        ADMIN_ORIGIN: {
            short: 'adm_org',
            long: 'ADMIN_ORIGIN',
            label: 'Super Admin',
        },
    };
    constructor(
        public name?: string,
        public type?: string,
        public desc?: string,
        public accessList?: Access[]) {
        super();
    }

}
