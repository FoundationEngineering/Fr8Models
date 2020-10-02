export class TimeInOutWeekMap {
    constructor(
        public mo? :{timeIn: Date, timeOut: Date},
        public tu? :{timeIn: Date, timeOut: Date},
        public we? :{timeIn: Date, timeOut: Date},
        public th? :{timeIn: Date, timeOut: Date},
        public fr? :{timeIn: Date, timeOut: Date},
        public sa? :{timeIn: Date, timeOut: Date},
        public su? :{timeIn: Date, timeOut: Date},
    ) { }
}
