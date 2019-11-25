import { PriceRule } from './priceRule';

export class PriceRuleSet {
    constructor(public id: string, public companyName: string, public priceRules: Array<PriceRule>){ }
}
