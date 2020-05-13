export class DispatchStatus {
    public static STATUS = {
        NEW: {
            short: 'NEW',
            long: 'new'
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
        ACCEPTED: {
            short: 'ACC',
            long: 'accepted'
        },
        REJECTED: {
            short: 'REJ',
            long: 'rejected'
        },
    };
}
