export class Company {
    constructor (public id?: number, public parentId?: number, public childrenIds?: Array<number>,
        public companyName?: string, public companyMainEmail?: string, public companyNotifyEmail?: string,
        public companyQuoteEmail?: string) {}
}
