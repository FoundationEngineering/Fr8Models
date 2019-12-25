import { User } from '../domain/user';
export class ResetPasswordResponse {
    constructor(public user?: User){}
}
