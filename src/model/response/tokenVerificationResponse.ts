import { User } from "../../database/models/auth/user";

export class TokenVerificationResponse {
    public errorMessage: string;
    public user: User;
}
