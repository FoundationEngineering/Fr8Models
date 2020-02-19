import { PricingRateLevelPair, PricingRateLevel } from '../pricingRateLevel';

export class RatingCardTonneVolumeRatesData {
    constructor(
        public ratingCardName: String,
        public rates: PricingRateLevelPair[]
        ) {}
}

export class RatingCardTonneVolumeRates {
    constructor(public id?: number,
        public parentCompanyId?: number,
        public companyId?: number,
        public companyName?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public data?: RatingCardTonneVolumeRatesData) { }

}