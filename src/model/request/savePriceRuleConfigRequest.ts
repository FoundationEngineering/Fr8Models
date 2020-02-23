import { PriceRuleConfig } from '../domain/quote/priceRule/priceRuleConfig';

export class SavePriceRuleConfigRequest {
    constructor(public companyId: number, public priceRuleConfigs: PriceRuleConfig[]) {}
}
