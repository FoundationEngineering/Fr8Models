export enum AccessType {
    CanAccessTimeSheet = 0,
    CanAccessDispatch = 1,
    CanAccessManifest = 2,
    CanAccessCompany = 3,
    CanAccessUsers = 4,
    CanAccessSettings = 5,
    CanAccessCustomers = 6,
    CanAccessRatingCard = 7,
    CanAccessPriceConfig = 8,
    CanAccessQuote = 9,
    CanAccessDispatchMove = 10,
    CanAccessDispatchHistory = 11,
    CanAccessDispatchDocument = 12,
    CanAccessDispatchConsignmentItem = 13
}

export class AccessTypeString {
    static TYPES = {
        0: 'CanAccessTimeSheet',
        1: 'CanAccessDispatch',
        2: 'CanAccessManifest',
        3: 'CanAccessCompany',
        4: 'CanAccessUsers',
        5: 'CanAccessSettings',
        6: 'CanAccessCustomers',
        7: 'CanAccessRatingCard',
        8: 'CanAccessPriceConfig',
        9: 'CanAccessQuote',
        10: 'CanAccessDispatchMove',
        11: 'CanAccessDispatchHistory',
        12: 'CanAccessDispatchDocument',
        13: 'CanAccessDispatchConsignmentItem'
    }
}
