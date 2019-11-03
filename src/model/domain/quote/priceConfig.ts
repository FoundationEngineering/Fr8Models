export class PriceConfig {
    constructor(public tonneRate: number, public massRate: number, public palletRate: number,
                public tonneMaxRate: number, public massMaxRate: number) {
        // Set defaultss
        this.massMaxRate = typeof massMaxRate !== 'undefined' ? massMaxRate : 3;
        this.tonneMaxRate = typeof tonneMaxRate !== 'undefined' ? tonneMaxRate : 1;
    }
}
