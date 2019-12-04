// Used before selecting a price rule set
import { PriceRuleSet } from './priceRuleSet';
import { PriceRule } from './priceRule';

export class PriceRuleLocationConditional {
    constructor(public locationList?: Array<string>, public priceRuleSet?: PriceRuleSet){ }
}
