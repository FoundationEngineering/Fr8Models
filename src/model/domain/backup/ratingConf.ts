import { RatingCard } from '../quote/ratingCard/ratingCard';
import { PriceRuleConfig } from '../quote/quote/priceRule/PriceRuleConfig'

export class RatingConf{
    constructor(
    public ratingCardList?: RatingCard[],
    public ratingCardZoneList?: RatingCardZone[],
    public ratingCardTonneVolumeList?: RatingCardTonneVolumeRates[],
    public ratingCardPalletRateList?: RatingCardPalletRate[],
    public ratingCardMinChargeList?: RatingCardMinCharge[],
    public ratingCardZoneList?: RatingCardZone[],
    public priceRuleConfig?: PriceRuleConfig[]
    ) { }
}
