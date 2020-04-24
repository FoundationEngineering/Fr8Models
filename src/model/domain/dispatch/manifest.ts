import { TemplateDto } from "../templateDto";
import { DispatchRecord } from "./dispatchRecord";

export class Manifest extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public routeId?: number,
        public driverId?: number,
        public vehicleId?: number,
        public to?: string,
        public from?: string,
        public currentPlaceLocation?: string,
        public dispatchRecordList?: DispatchRecord[],
        public note?: string,
        public data?: string) {
        super();
    }
}