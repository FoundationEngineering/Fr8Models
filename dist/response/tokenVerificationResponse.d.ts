import { User } from "../domain/User";
export declare class TokenVerificationResponse {
    errorMessage: string;
    user: User;
    constructor(errorMessage: string, user: User);
}
