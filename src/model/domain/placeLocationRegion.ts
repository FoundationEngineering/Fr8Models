import { TemplateDto } from "./templateDto";
import { PlaceLocation } from "./placeLocation";

export class PlaceLocationRegion extends TemplateDto {
    constructor(
        public name?: string,
        public regionGroupId?: number,
        public placeLocationList?: PlaceLocation[]
        ) { super(); }
}