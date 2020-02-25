export class PalletRateData {
    constructor(
        public toLocation: string,
        public cost: number) {}
}

export class RatingCardPalletRateData {
    constructor(
        public rates: PalletRateData[]
        ) {}
}

export class RatingCardPalletRate {
    constructor(public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,
        public name?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public data?: RatingCardPalletRateData) { }
}