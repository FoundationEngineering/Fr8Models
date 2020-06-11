export class PlaceLocationAddress {
    constructor(
        public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,
        public dispatchId?: number,
        public depotId?: number,
        public routeId?: number,

        public isDeliveryAddress?: boolean,

        public region?: string,
        public regionGroup?: string,

        public uuid?: string,
        public streetAddress?: string,
        public postCode?: string,
        public suburb?: string,
        public city?: string,
        public town?: string,

        public createdAt?: Date,
        public updatedAt?: Date) { }
}
