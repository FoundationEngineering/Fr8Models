import { TemplateDto } from "../templateDto";

export class DispatchMove extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public statusCode?: string,
        public from?: string,
        public to?: string,
        public placeLocation?: string,
        public placeLocationRegion?: string,
        public placeLocationRegionGroup?: string,

        public moveSetNo?: number,
        public deliveryPersonName?: string,
        public recieverPersonName?: string,

        public requestedBy?: string,
        public pickupBy?: string,
        public pickupFrom?: string,
        public acceptedBy?: string,
        public acceptedDate?: Date) {
        super();
    }
}
