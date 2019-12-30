import { PricingRateLevelPair } from './pricingRateLevel';
import { MajorLocationSet, MinorLocationSet } from './pricingLevel';

export class CardData {
    constructor(public id?: number, public companyId?: number, public parentCompany?: number){ }
}

export class RatingCard {
    constructor(public id?: number,
                public majorLocations?: MajorLocationSet,
                public minorLocations?: MinorLocationSet,
                public pricingRateLevelList?: Array<PricingRateLevelPair>,
                public cardData?: CardData){ }

}
