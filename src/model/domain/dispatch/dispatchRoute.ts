import { PlaceLocationAddress } from "../placeLocationAddress";
import { TemplateDto } from "../templateDto";

export class DispatchRoute extends TemplateDto {
    constructor(
        public name?: number,
        public addressList?: PlaceLocationAddress[]
    ) {
        super();
    }
}
