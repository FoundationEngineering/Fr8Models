export class ZoneRate {
    constructor(
        public m3: number,
        public tonne: number,
        public cost: number) {}
}

export class MajorMinorRel {
    constructor(
        public location: string,
        public minorLocationList: string[]) {}
}

export class ZoneData {
    constructor(
        public toLocation?: string, // zone name
        public majorLocationList?: MajorMinorRel[],
        public cost_p_m3?: number,
        public cost_p_tonne?: number,
        public rates?: ZoneRate[]) {}
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
        public data?: RatingCardZoneData,
        public uuid?: string
        ) { }
}