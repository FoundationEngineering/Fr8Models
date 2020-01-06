import { PriceRuleConfig } from '../domain/quote/priceRuleConfig';

export class SavePriceRuleConfigRequest {
    constructor(public companyId: number, public priceRuleConfigs: PriceRuleConfig[]) {}
}
