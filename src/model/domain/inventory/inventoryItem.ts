import { TemplateDto } from "../templateDto";
import { InventoryItemRecord } from "./inventoryItemRecord";

export class InventoryItem extends TemplateDto {
    constructor(
        public name?: string,
        public amount?: number,
        public InventoryItemRecordList?: InventoryItemRecord[],
    ) { super(); }
}
