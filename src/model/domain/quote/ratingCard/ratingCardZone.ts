export class ZoneRate {
    constructor(
        public m3: number,
        public tonne: number,
        public cost: number) {}
}

export class ZoneData {
    constructor(
        public toLocation: string,
        public rates: ZoneRate[]) {}
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