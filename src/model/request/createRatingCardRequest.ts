import { RatingCard } from '../domain/quote/ratingCard';
import { PricingLevelPair } from '../domain/quote/pricingLevel';
import { PricingRateLevelPair } from '../domain/quote/pricingRateLevel';

export class CreateRatingCardRequest {
    constructor(public companyId: number, public majorLocations: PricingLevelPair[],
                public minorLocations: PricingLevelPair[], public pricingRateLevelList: PricingRateLevelPair[]) {}
}
