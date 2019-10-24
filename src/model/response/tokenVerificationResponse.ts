import { User } from "../domain/User";

export class TokenVerificationResponse {
    public errorMessage: string;
    public user: User;
}
