export class SaveUserRequest {
    constructor(
        public username?: string,
        public password?: string,
        public companyId?: number,
        public firstName?: string,
        public lastName?: string){ }
}
