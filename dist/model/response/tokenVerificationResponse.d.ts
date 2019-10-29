import { User } from "../domain/user";
export declare class TokenVerificationResponse {
    errorMessage: string;
    user: User;
    constructor(errorMessage: string, user: User);
}
