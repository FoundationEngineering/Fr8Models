import { PriceRuleConfig } from '../domain/quote/priceRuleConfig';

export class CreatePriceRuleConfigRequest {
    constructor(public companyId: number, public priceRuleConfig: PriceRuleConfig) {}
}
