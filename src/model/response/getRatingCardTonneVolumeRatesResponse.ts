import { GetRecordsResponse } from './getRecordsResponse'
import { RatingCardTonneVolumeRates } from '../domain/quote/ratingCard/ratingCardTonneVolumeRates'

export class GetAdditionalCostsResponse extends GetRecordsResponse {
    constructor(public page?: number,
                public pageSize?: number,
                public totalCount?: number,
                public records?: RatingCardTonneVolumeRates[]
    ) {
        super(page, pageSize, totalCount);
    }
}