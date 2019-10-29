import { PricingRateLevel } from './pricingRateLevel';
import { PricingLevel } from './pricingLevel';
export declare class RatingCard {
    majorLocations: Array<PricingLevel>;
    costRatePerTonne: Array<PricingRateLevel>;
    constructor(majorLocations: Array<PricingLevel>, costRatePerTonne: Array<PricingRateLevel>);
}
