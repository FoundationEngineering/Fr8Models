export class DispatchQuoteMapper {
    public static QuoteListToIcosQuoteList(quoteList: any[]) {
        return quoteList.map((item) => {
            return {
                Docket: item.docket,
                Customer: '',
                Pickup: '',
                From: item.from,
                Deliver: '',
                To: item.to,
                Quantity: item.palletAmount,
                Weight: item.weight,
                Volume: item.mass,
                Charge: item.expectCost
            };
        });
    }
}