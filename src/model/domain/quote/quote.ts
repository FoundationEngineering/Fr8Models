export class Quote {
    constructor(public id?: number, public iCOSRef?: number, public companyId?: number, public companyName?: string, public createdAt?: Date, public updatedAt?: Date, public weight?: number, public mass?: number, public cost?: number, public to?: string, public from?: string, parentCompanyId?: number) { }
}
