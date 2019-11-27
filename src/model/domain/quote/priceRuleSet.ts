import { PriceRule } from './priceRule';

export class PriceRuleSet {
    constructor(public priceRules: Array<PriceRule>){ }

    public getPriceRules(): Array<PriceRule> {
        return this.priceRules.filter((rule: PriceRule) => {
            return rule && rule.stepNo && rule.stepNo > -1;
        });
    }

}
