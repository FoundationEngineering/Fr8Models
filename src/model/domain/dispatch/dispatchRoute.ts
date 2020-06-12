import { PlaceLocationAddress } from "../placeLocationAddress";
import { TemplateDto } from "../templateDto";

export class DispatchRoute extends TemplateDto {
    constructor(
        public name?: number,
        public to?: string,
        public from?: string,
        public toPlaceLocationAddress?: PlaceLocationAddress,
        public fromPlaceLocationAddress?: PlaceLocationAddress,
    ) {
        super();
    }
}
