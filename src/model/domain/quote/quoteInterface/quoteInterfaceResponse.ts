export class QuoteInterfaceResponse {
    constructor(
        public success: boolean,
        public cost: number,
        public message?: any,
        public data?: any,
        public quoteId?: string
        ) {}
}

