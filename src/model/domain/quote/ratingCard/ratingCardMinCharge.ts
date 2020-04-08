export class MinChargeData {

    constructor(
        public toLocation: string,
        public cost: number) {}
}

export class RatingCardMinChargeData {
    constructor(
        public rates: MinChargeData[]
        ) {}
}

export class RatingCardMinCharge {
    constructor(
        public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,
        public name?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public data?: RatingCardMinChargeData,
        public uuid?: string,
        ) { }
}