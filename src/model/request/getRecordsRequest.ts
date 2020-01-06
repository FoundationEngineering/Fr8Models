export class GetRecordsRequest {
    constructor(public page?: number, public pageSize?: number) {
        this.page = this.page && this.page > 0 ? this.page : 0;
        this.pageSize = this.pageSize && this.pageSize > 0 ? this.pageSize : 20;
    }
}
