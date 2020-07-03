import { RatingCard } from '../ratingCard/ratingCard';
import { RatingCardTonneVolumeRates } from '../ratingCard/ratingCardTonneVolumeRates';
import { RatingCardMinCharge } from '../ratingCard/ratingCardMinCharge';
import { RatingCardPalletRate } from '../ratingCard/ratingCardPalletRate';
import { RatingCardZone } from '../ratingCard/ratingCardZone';

export class PriceConfig {
    constructor(public ratingCard?: RatingCard,
        public tonneRate?: number,
        public massRate?: number,
        public palletRate?: number,
        public gstRate?: number,
        public flatCost?: number,
        public fafRate?: number,
        public minCharge?: number,
        public ratingCardTonneVolumeRatesList?: RatingCardTonneVolumeRates[],
        public ratingCardMinChargeList?: RatingCardMinCharge[],
        public ratingCardPalletRateList?: RatingCardPalletRate[],
        public ratingCardZoneList?: RatingCardZone[],

        // Generated on front end app with above data
        public combinedRatingCard?: any,
        public quoteConstants?: any,
        public quotePriceLevelService?: any
    ) { }
}