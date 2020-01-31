import { GetRecordsResponse } from './getRecordsResponse'
import { AdditionalCosts } from '../domain/quote/additionalCosts'

export class GetAdditionalCostsResponse extends GetRecordsResponse {
    constructor(public page?: number,
                public pageSize?: number,
                public totalCount?: number,
                public records?: AdditionalCosts
    ) {
        super(page, pageSize, totalCount);
    }
}
