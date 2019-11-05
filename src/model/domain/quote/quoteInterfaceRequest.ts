export class QuoteInterfaceRequest {
    public tonne: number;
    public totalCalculatedCost: number;
    public totalCost: number;
    constructor(public to: string = '', public from: string = '',
                public weight: number = 0, public mass: number = 0, 
                public palletAmount: number = 0,
                public driverCost: number = 0,
                public upliftCost: number = 0,
               ) {
                   this.totalCalculatedCost = 0;
                   this.totalCost  =  0;
                   this.tonne = this.weight * 0.001;
               }
}
