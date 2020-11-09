import { Company } from './company';

export abstract class UserTemplate {
    constructor(public id?: number,
        public username?: string,
        public password?: string,
        public companyId?: number,
        public parentCompanyId?: number,
        public updatedAt?: Date,
        public createdAt?: Date,
        public firstName?: string,
        public lastName?: string,
        public userRoleType?: string,
        public isSignedIn?: boolean,
        public isCheckedIn?: boolean
    ){ }
}

export class User extends UserTemplate {
    constructor(public id?: number, public username?: string, public password?: string,
        public companyId?: number, public parentCompanyId?: number, public updatedAt?: Date, public createdAt?: Date){
        super(id, username, password, companyId, parentCompanyId, updatedAt, createdAt);
    }
}

/**
 * This model may or may not reflect the db model, this is to give all the fields that can be added to 
 * the company object when joining queries
 */

export class UserExtended extends UserTemplate {
    constructor(public id?: number, public username?: string, public password?: string,
        public companyId?: number, public parentCompanyId?: number, public updatedAt?: Date, public createdAt?: Date,
        
        public company?: Company){
        super(id, username, password, companyId, parentCompanyId, updatedAt, createdAt);
    }
}
