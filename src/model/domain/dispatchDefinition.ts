import { PriceRule } from './quote/priceRule/priceRule';

export class JobDefinition {
    constructor(public pricingRules: Array<PriceRule>){ }
}
