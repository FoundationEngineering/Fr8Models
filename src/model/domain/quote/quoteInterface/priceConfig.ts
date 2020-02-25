import { RatingCard } from '../ratingCard/ratingCard';
import { RatingCardTonneVolumeRates } from '../ratingCard/ratingCardTonneVolumeRates';
import { RatingCardMinCharge } from '../ratingCard/ratingCardMinCharge';

export class PriceConfig {
    constructor(public ratingCard: RatingCard,
                public tonneRate?: number, public massRate?: number,
                public palletRate?: number, public gstRate?: number,
                public flatCost?: number, public fafRate?: number,
                public minCharge?: number,
                public ratingCardTonneVolumeRatesList?: RatingCardTonneVolumeRates[],
                public ratingCardMinChargeList?: RatingCardMinCharge[]
               ) { }
}
