import { User } from './user';
import { PlaceLocation } from './placeLocation';
import { PlaceLocationAddress } from './placeLocationAddress';

export abstract class companyTemplate {
    constructor (public id?: number, public parentId?: number, public childrenIds?: Array<number>,
        public companyName?: string, public companyMainEmail?: string, public companyNotifyEmail?: string,
        public companyQuoteEmail?: string, public createdAt?: Date, public updatedAt?: Date) {}
}

export class Company extends companyTemplate {
    constructor (public id?: number, public parentId?: number, public childrenIds?: Array<number>,
        public companyName?: string, public companyMainEmail?: string, public companyNotifyEmail?: string,
        public companyQuoteEmail?: string, public createdAt?: Date, public updatedAt?: Date) {

        super(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail,
            companyQuoteEmail, createdAt, updatedAt);
        
    }
}

/**
 * This model may or may not reflect the db model, this is to give all the fields that can be added to 
 * the company object when joining queries
 */
export class CompanyExtended extends companyTemplate {
    constructor (public id?: number, public parentId?: number, public childrenIds?: Array<number>,
        public companyName?: string, public companyMainEmail?: string, public companyNotifyEmail?: string,
        public companyQuoteEmail?: string, public createdAt?: Date, public updatedAt?: Date,
        
        public users?: User[],
        public addressList?: PlaceLocationAddress[],
        ) { // Extended fields
        super(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail,
            companyQuoteEmail, createdAt, updatedAt);
    }
}
