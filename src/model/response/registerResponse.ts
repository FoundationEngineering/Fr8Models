import { User } from '../domain/user';
import { Company } from '../domain/company';
export class RegisterResponse {
    constructor(public user?: User, public company?: Company){}
}
