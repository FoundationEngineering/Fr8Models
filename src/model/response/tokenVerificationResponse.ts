import { User } from "../domain/user";

export class TokenVerificationResponse {
    constructor(public errorMessage: string, public user: User){}
}
