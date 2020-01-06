export abstract class GetRecordsResponse {
    constructor(public page?: number,
                public pageSize?: number,
                public totalCount?: number,
                // Add records on child class
                ) { }
}
