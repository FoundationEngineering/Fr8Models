export class PriceRule {
    // Type of Pricing Rules
    public static TYPE: any = {
        RATING_CARD: 'type_rating_card',
        TONNE_RATE: 'type_tonne_rate',
        MASS_RATE: 'type_mass_rate',
        PALLET_RATE: 'type_pallet_rate',
        // Additional Costs
        DRIVER_COST: 'type_driver_cost',
        UPLIFT_COST: 'type_uplift_cost',
        FUEL_ADJUST_FEE: 'type_fuel_adjust_fee',
        PALLET_COST: 'type_pallet_cost',
        MIN_CHARGE: 'type_min_charge',
        FLAT_CHARGE: 'type_flat_charge',
        GST: 'type_gst',

        GET_GREATER_NEXT: 'type_get_greater_next' // compares next step and chooses greater
    };
    public static NON_SEQ_STEP_NO = -1;

    public compareSteps = {
        stepA: 0, // from begining to step A
        stepB: 0 // from step A to step B
    };

    
    constructor(public stepNo?: number, public type?: string){ }

    public setAsGreaterNext(stepA: number, stepB: number){
        this.stepNo = PriceRule.NON_SEQ_STEP_NO; // reserved for non sequenciable steps i.e. filter out
        this.type = PriceRule.TYPE.GET_GREATER_NEXT;
        this.compareSteps.stepA = stepA;
        this.compareSteps.stepB = stepB;
    }
}
