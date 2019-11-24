export class RegisterRequest {
    constructor(public username?: string, public password?: string, public companyName?: string,
        public companyMainEmail?: string, public companyQuoteEmail?: string, public companyNotifyEmail?: string){ }
}
