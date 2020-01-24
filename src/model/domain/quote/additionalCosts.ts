export class AdditionalCost {
    constructor(public name?: string, public cost?: number) {
        this.cost = cost ? cost : 0.00;
    }
}
export class AdditionalCosts {
    constructor(public id?: number, public parentCompanyId?: number,
        public companyId?: number, public companyName?: string, public createdAt?: Date, public updatedAt?: Date,
        public data?: AdditionalCost[]) { }
}
