export class AdditionalCost {
    public static TYPE: any = {
        DRIVER_COST: 'type_driver_cost',
        UPLIFT_COST: 'type_uplift_cost',
        FUEL_ADJUST_FEE: 'type_fuel_adjust_fee',
        PALLET_COST: 'type_pallet_cost',
    };

    constructor(public name?: string, public cost?: number) {
        this.cost = cost ? cost : 0.00;
    }
}
export class AdditionalCosts {
    constructor(public id?: number, public parentCompanyId?: number,
        public companyId?: number, public companyName?: string, public createdAt?: Date, public updatedAt?: Date,
        public data?: AdditionalCost[]) { }
}
