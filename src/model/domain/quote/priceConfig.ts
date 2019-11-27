import { RatingCard } from './ratingCard';
import { PricingRateLevel } from './pricingRateLevel';

export class PriceConfig {
    constructor(public ratingCard: RatingCard,
                public tonneRate?: number, public massRate?: number,
                public palletRate?: number, public gstRate?: number,
                public flatCost?: number, public fafRate?: number,
                public minCharge?: number
               ) { }
}
