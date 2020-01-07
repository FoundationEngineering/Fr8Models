import { PriceRuleSet } from './priceRuleSet';
import { PriceRuleLocationConditional } from './priceRuleLocationConditional';

export class PriceRuleConfig {
    constructor(public id?: number, public companyName?: string, public companyId?: number,
        public priceRuleSet?: PriceRuleSet, public priceRuleLocationConditionals?: Array<PriceRuleLocationConditional>){} 
}
