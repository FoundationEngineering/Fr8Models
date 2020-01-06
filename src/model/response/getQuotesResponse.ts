import { GetRecordsResponse } from './getRecordsResponse'
import { Quote } from '../domain/quote/quote'

export class GetQuotesResponse extends GetRecordsResponse {
    constructor(public page?: number,
                public pageSize?: number,
                public totalCount?: number,
                public records?: Quote[]
    ) {
        super(page, pageSize, totalCount);
    }
}
