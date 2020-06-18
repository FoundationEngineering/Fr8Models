import { TemplateDto } from "../templateDto";
import { DispatchRecord } from "./dispatchRecord";
import { DispatchMove } from "./dispatchMoves";
import { DispatchVehicle } from "./dispatchVehicle";
import { DispatchRoute } from "./dispatchRoute";
import { User } from "../user";
import { PlaceLocationAddress } from "../placeLocationAddress";

export class Manifest extends TemplateDto {
    constructor(
        public to?: string,
        public from?: string,
        public currentPlaceLocation?: string,
        public note?: string,
        public data?: string,
        public isFinalised?: boolean,
        public isInTransit?: boolean,
        public isCompleted?: boolean,

        // DB Incl
        public dispatchRecordList?: DispatchRecord[],
        public dispatchMoves?: DispatchMove[],
        public dispatchVehicle?: DispatchVehicle,
        public dispatchRoute?: DispatchRoute,
        public driverUser?: User,

        public fromPlaceLocationAddress?: PlaceLocationAddress,
        public toPlaceLocationAddress?: PlaceLocationAddress,

    ) {
        super();
    }
}
