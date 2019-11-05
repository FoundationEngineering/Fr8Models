export class QuoteInterfaceRequest {
    public tonne: number;
    public totalCalculatedCost: number;
    public totalCost: number;
    constructor(public to: string, public from: string,
                public weight: number, public mass: number, 
                public palletAmount?: number,
                public driverCost?: number,
                public upliftCost?: number,
               ) {
                   this.totalCalculatedCost = 0;
                   this.totalCost  =  0;
                   this.tonne = this.weight * 0.001;
               }
}
