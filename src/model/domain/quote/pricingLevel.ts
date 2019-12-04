/**
* This file stores all of the models dedicated to the pricing level logic
*/

export class PricingLevel {
    constructor(public m3?: number, public tonne?: number, public cost?: number){ }
}

export class PricingLevelPair {
    constructor(public locationKey?: string, public pricingLevelList?: Array<PricingLevel>){ }
}

export class MinorLocationSet {
    constructor(public pricingLevelPair?: Array<PricingLevelPair>){ }
}

export class MajorLocationSet {
    constructor(public pricingLevelPair?: Array<PricingLevelPair>){ }
}
