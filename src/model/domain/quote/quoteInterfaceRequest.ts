export class QuoteInterfaceRequest {
    public tonne: number;
    public totalCalculatedCost: number;
    public totalCost: number;
    constructor(public type: string, public kg: number, public mass: number, public palletAmount: number,
                public driverCost: number, public upliftCost: number, public fafRate: number,
                public palletRate: number, public minCharge: number, public flatCost: number,
                public gstRate: number
               ) {
                   this.totalCalculatedCost = 0;
                   this.totalCost  =  0;
                   this.tonne = this.kg * 0.001;
               }
}
