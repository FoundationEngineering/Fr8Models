import { Company } from '../domain/company';
import { Access } from '../type/Access';
export class LoginResponse {
    constructor(
        public username?: string, 
        public token?: string,
        public company?: Company,
        public accessList?: Access[]){}
}
