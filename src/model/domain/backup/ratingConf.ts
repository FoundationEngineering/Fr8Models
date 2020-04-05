import { RatingCard } from '../quote/ratingCard/ratingCard';
import { PriceRuleConfig } from '../quote/priceRule/priceRuleConfig';
import { RatingCardPalletRate } from '../quote/ratingCard/ratingCardPalletRate';
import { RatingCardZone } from '../quote/ratingCard/ratingCardZone';
import { RatingCardTonneVolumeRates } from '../quote/ratingCard/ratingCardTonneVolumeRates';
import { RatingCardMinCharge } from '../quote/ratingCard/ratingCardMinCharge';

export class RatingConf{
    constructor(
        public id?: number, 
        public parentCompanyId?: number, 
        public companyId?: number, 
        public createdAt?: Date, 
        public updatedAt?: Date, 
        public ratingCardList?: RatingCard[],
        public ratingCardTonneVolumeList?: RatingCardTonneVolumeRates[],
        public ratingCardPalletRateList?: RatingCardPalletRate[],
        public ratingCardMinChargeList?: RatingCardMinCharge[],
        public ratingCardZoneList?: RatingCardZone[],
        public priceRuleConfig?: PriceRuleConfig[]) { }
}
