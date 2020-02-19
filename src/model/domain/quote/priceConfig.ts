import { RatingCard } from './ratingCard/ratingCard';
import { PricingRateLevel } from './pricingRateLevel';
import { RatingCardTonneVolumeRates } from './ratingCard/ratingCardTonneVolumeRates';

export class PriceConfig {
    constructor(public ratingCard: RatingCard,
                public tonneRate?: number, public massRate?: number,
                public palletRate?: number, public gstRate?: number,
                public flatCost?: number, public fafRate?: number,
                public minCharge?: number,
                public ratingCardTonneVolumeRatesList?: RatingCardTonneVolumeRates[]
               ) { }
}
