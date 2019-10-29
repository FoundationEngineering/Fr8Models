import { PricingRateLevel } from './pricingRateLevel';
import { PricingLevel } from './pricingLevel';

export class RatingCard {
    constructor(public majorLocations: Array<PricingLevel>, public costRatePerTonne: Array<PricingRateLevel>){ }
}
