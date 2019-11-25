// Used before selecting a price rule set
import { PriceRuleSet } from './priceRuleSet';

export class PriceRuleLocationConditional {
    constructor(public locationList?: Array<string>, priceRuleSet?: PriceRuleSet){ }
}
