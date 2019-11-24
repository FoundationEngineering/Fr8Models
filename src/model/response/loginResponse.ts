import { Company } from '../domain/company';
export class LoginResponse {
    constructor(public username?: string, public token?: string,  public company?: Company){}
}
