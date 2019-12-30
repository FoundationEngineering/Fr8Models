import { RatingCard } from '../domain/quote/ratingCard';
import { PricingLevelPair, MajorLocationSet, MinorLocationSet } from '../domain/quote/pricingLevel';
import { PricingRateLevelPair } from '../domain/quote/pricingRateLevel';

export class CreateRatingCardRequest {
    constructor(public companyId: number, public majorLocations: MajorLocationSet,
                public minorLocations: MinorLocationSet, public pricingRateLevelList: PricingRateLevelPair[]) {}
}
