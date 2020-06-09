import { TemplateDto } from "../templateDto";
import { PlaceLocationAddress } from "../placeLocationAddress";

export class DispatchDepot extends TemplateDto {
    constructor(
        public name?: number,
        public addressList?: PlaceLocationAddress[]
    ) {
        super();
    }
}
