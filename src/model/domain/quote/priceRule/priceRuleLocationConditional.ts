// Used before selecting a price rule set
import { PriceRuleSet } from './priceRuleSet';

export class LocationTuple {
    constructor(public to: string, public from: string) {}
}
export class PriceRuleLocationConditional {
    constructor(
        public locationList?: Array<LocationTuple>,
        public priceRuleSet?: PriceRuleSet,
        public id?: string,
        public name?: string,
        public fromLocationList?: string[],
        public isIncudeReverseRate?: boolean
        ) { }
}
