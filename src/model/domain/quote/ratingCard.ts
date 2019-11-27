import { PricingRateLevel } from './pricingRateLevel';
import { MajorLocationSet, MinorLocationSet } from './pricingLevel';

export class RatingCard {
    constructor(public majorLocations?: MajorLocationSet,
                public minorLocations?: MinorLocationSet,
                public pricingRateLevelList?: Array<PricingRateLevel>){ }

}
