import { AdditionalCost } from './additionalCosts';

export class Quote {
    constructor(public id?: number,
        public iCOSRef?: number,
        public quoteId?: string,
        public companyId?: number,
        public companyName?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public weight?: number,
        public mass?: number,
        public cost?: number,
        public to?: string,
        public from?: string,
        public parentCompanyNote?: string, 
        public parentCompanyId?: number,
        public additionalCosts?: AdditionalCost[],
        public palletNo?: number
        ) { }
}
