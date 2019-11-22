export class UserInfoFromToken {
    // Treat as a session class
   constructor(public userId?: number, public companyId?: number, public companyName?: string, public username?: string, public access?: any[]) {}
}
