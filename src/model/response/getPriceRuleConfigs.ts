import { GetRecordsResponse } from './getRecordsResponse'
import { PriceRuleConfig } from '../domain/quote/priceRule/priceRuleConfig'

export class GetPriceRuleConfigsResponse extends GetRecordsResponse {
    constructor(public page?: number,
                public pageSize?: number,
                public totalCount?: number,
                public records?: PriceRuleConfig[]
    ) {
        super(page, pageSize, totalCount);
    }
}
