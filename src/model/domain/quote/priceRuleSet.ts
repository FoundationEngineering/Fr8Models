import { PriceRule } from './priceRule';

export class PriceRuleSet {
    constructor(public id: string, public name: string, public priceRules: Array<PriceRule>){ }
}
