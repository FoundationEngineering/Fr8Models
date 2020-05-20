import { Company } from '../domain/company';
import { Access } from '../type/Access';
import { UserRole } from '../domain/userRole';
export class LoginResponse {
    constructor(
        public username?: string, 
        public firstName?: string,
        public lastName?: string,
        public token?: string,
        public company?: Company,
        public userRole?: UserRole
    ){}
}
