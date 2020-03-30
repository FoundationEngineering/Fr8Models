export enum PrivilegeType {
    Full = 0,
    Read = 1,
    ReadAndWrite = 2
}

export class PrivilegeTypeString {
    static TYPES = {
        0: 'Full',
        1: 'Read',
        2: 'ReadAndWrite',
    }
}