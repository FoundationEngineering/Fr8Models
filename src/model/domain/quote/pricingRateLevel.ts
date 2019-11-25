export class PricingRateLevel {
    constructor(public cost_p_tonne?: number, public cost_p_m3?: number){ }
}

export class PricingRateLevelPair {
    constructor(public locationKey?: string, public pricingRateLevel?: PricingRateLevel){ }
}
