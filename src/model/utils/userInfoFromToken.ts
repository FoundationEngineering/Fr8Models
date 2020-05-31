export class UserInfoFromToken {
    // Treat as a session class
   constructor(
       public userId?: number,
       public parentCompanyId?: number,
       public companyId?: number,
       public companyName?: string,
       public username?: string,
       public firstName?: string,
       public lastName?: string,
       public userRole?: any,
   ) {}
}
