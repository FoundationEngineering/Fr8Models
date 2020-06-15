import { TemplateDto } from "../templateDto";
import { DispatchRecord } from "./dispatchRecord";
import { DispatchMove } from "./dispatchMoves";
import { DispatchVehicle } from "./dispatchVehicle";
import { DispatchRoute } from "./dispatchRoute";
import { User } from "../user";
import { PlaceLocationAddress } from "../placeLocationAddress";

export class Manifest extends TemplateDto {
    constructor(
        public dispatchRouteId?: number,
        public driverId?: number,
        public vehicleId?: number,
        public to?: string,
        public from?: string,
        public currentPlaceLocation?: string,
        public note?: string,
        public data?: string,
        public isFinalised?: boolean,

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
