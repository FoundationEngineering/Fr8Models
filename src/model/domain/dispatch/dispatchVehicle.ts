import { TemplateDto } from "../templateDto";

export class DispatchVehicle extends TemplateDto {
    constructor(
        public name?: number,
        public model?: number) {
        super();
    }
}
