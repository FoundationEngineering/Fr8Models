import { PriceRuleSet } from './priceRuleSet';
import { PriceRuleLocationConditional } from './priceRuleLocationConditional';

export class PriceRuleConfig {
    constructor(
        public id?: number,
        public companyName?: string,
        public companyId?: number,
        public priceRuleSet?: PriceRuleSet,
        public priceRuleLocationConditionals?: PriceRuleLocationConditional[],
        public filters?: PriceRuleFilter[], // points to the Conditional in the contained list
        public uuid?: string
        ){} 
}

export class PriceRuleFilter {
    public static TYPE = {
        FROM_LOCATION: 'price-rule-filter-from-location'
    };

    constructor(
        public id?: string,
        public name?: string,
        public type?: string, // TYPE
        public conditionalRefId?: string
    ) {}
}
