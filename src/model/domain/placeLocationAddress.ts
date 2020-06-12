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

    static getAddressString(address: PlaceLocationAddress): string {
        const temp = JSON.parse(JSON.stringify(address));
        let addr = (temp.streetAddress != null ? temp.streetAddress + ' ' : '') +
        (temp.suburb != null ? temp.suburb + ' ' : '') +
        (temp.city != null ? temp.city + ' ' : '') +
        (temp.postCode != null ? temp.postCode + ' ' : '');
        if (addr[addr.length - 1] === ' ') {
            addr = addr.slice(0, addr.length - 1);
        }
        return addr;
    }
}
