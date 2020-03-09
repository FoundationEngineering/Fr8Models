export class ZoneData {

    constructor(
        public toLocation: string,
        public rates: any[]) {}
}

export class RatingCardZoneData {
    constructor(
        public zones: ZoneData[]
        ) {}
}

export class RatingCardZone {
    constructor(
        public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,
        public name?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public data?: RatingCardZoneData) { }
}