export class PlaceLocation {
    constructor(
        public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,

        public name?: string,
        public region?: string,
        public regionGroup?: string,

        public createdAt?: Date,
        public updatedAt?: Date,
        public data?: any) { }
}