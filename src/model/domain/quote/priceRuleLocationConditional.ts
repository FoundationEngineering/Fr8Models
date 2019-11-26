// Used before selecting a price rule set
import { PriceRuleSet } from './priceRuleSet';
import { PriceRule } from './priceRule';

export class PriceRuleLocationConditional {
    constructor(public locationList?: Array<string>, public priceRuleSet?: PriceRuleSet){ }

    public getlocationalconditionalstep(): PriceRule {
        const prList = this.priceRuleSet ? this.priceRuleSet.priceRules : [];
        return prList.filter((pr) => {
            return pr.stepNo === -1;
        })[0]; // get first item
    }
}
