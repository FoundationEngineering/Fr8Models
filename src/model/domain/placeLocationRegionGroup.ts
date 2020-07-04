import { TemplateDto } from "./templateDto";
import { PlaceLocationRegion } from "./placeLocationRegion";

export class PlaceLocationRegionGroup extends TemplateDto {
    constructor(
        public name?: string,
        public placeLocationRegionList?: PlaceLocationRegion[]
        ) { super(); }
}