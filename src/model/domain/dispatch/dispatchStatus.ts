export class DispatchStatus {
    public static STATUS = {
        NEW: {
            short: 'NEW',
            long: 'new'
        },
        REQ: {
            short: 'REQ',
            long: 'requested'
        },
        READY: {
            short: 'RDY',
            long: 'ready'
        },
        ALLOCATED: {
            short: 'ALC',
            long: 'allocated'
        },
        PICKED_UP: {
            short: 'PUP',
            long: 'picked up'
        },
        UPLIFTED: {
            short: 'UPL',
            long: 'uplifted'
        },
        OFFLOADED: {
            short: 'OFL',
            long: 'offloaded'
        },
        OFFLOADED_DELIVERED: {
            short: 'OFD',
            long: 'offloaded and delivered'
        },
        DELIVERED: {
            short: 'DEL',
            long: 'delivered'
        },
        PROOF_OF_DELIVERY: {
            short: 'POD',
            long: 'proof of delivery'
        },
        ACCEPTED: {
            short: 'ACC',
            long: 'accepted'
        },
        REJECTED: {
            short: 'REJ',
            long: 'rejected'
        },
    };
    
    public static getDropdownOptions(): any[] {
        return Object.keys(DispatchStatus.STATUS)
            .map((item) => {
                const val = (DispatchStatus.STATUS as any)[item];
                return {
                    label: val.long + ' | ' + val.short,
                    value: val.short
                };
            });
    }
}
