import { PriceRule } from './quote/priceRule';

export class JobDefinition {
    constructor(public pricingRules: Array<PriceRule>){ }
}
