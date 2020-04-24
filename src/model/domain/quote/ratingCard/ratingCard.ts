import { PricingRateLevelPair } from '../pricingRateLevel';
import { MajorLocationSet, MinorLocationSet } from '../pricingLevel';

export class CardData {
    constructor(
        public id?: number,
        public companyId?: number,
        public parentCompany?: number,
        public majorLocationsRefList?: string,
        public minorLocationsRefList?: string,
        public pricingRateLevelListRefList?: string,
        public zoneRatingCardId?: string,
        public uuid?: string,
        ){ }
}

export class RatingCard {
    constructor(public id?: number,
                public majorLocations?: MajorLocationSet,
                public minorLocations?: MinorLocationSet,
                public pricingRateLevelList?: Array<PricingRateLevelPair>,
                public cardData?: CardData){ }

}
