import { Company } from '../domain/company';
import { User } from '../domain/user';
export class SaveUserResponse {
    constructor(public user?: User, public company?: Company){}
}
