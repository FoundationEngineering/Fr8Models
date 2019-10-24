import { User } from "../domain/User";

export class TokenVerificationResponse {
    constructor(public errorMessage: string, public user: User){}
}
