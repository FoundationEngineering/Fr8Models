import { PricingRateLevelPair } from '../pricingRateLevel';

export class RatingCardTonneVolumeRates {
    constructor(public id?: number, public parentCompanyId?: number,
        public companyId?: number, public companyName?: string, public createdAt?: Date, public updatedAt?: Date,
        public data?: PricingRateLevelPair[]) { }

}