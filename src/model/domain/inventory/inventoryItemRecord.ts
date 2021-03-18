import { TemplateDto } from "../templateDto";

export class InventoryItemRecord extends TemplateDto {
    public static JSON_ACTION_TYPE =  {
        INPUT: 'INPUT',
        OUTPUT: 'OUTPUT',
        LOSS: 'LOSS',
        PURCHASE: 'PURCHASE',
        SALE: 'SALE',
        OUTPUT_SAMPLE: 'OUTPUT_SAMPLE',
        ADJUSTMENT_LOSS: 'ADJUSTMENT_LOSS',
        ADJUSTMENT_GAIN: 'ADJUSTMENT_GAIN',
    };

    constructor(
        public inventoryItemId?: number,
        public inventoryItemUuid?: number,
        public actionType?: string,
        public name?: string,
        public amount?: number,
        public value?: number,
        public fromAmount?: number,
        public fromValue?: number,
        public note?: string,
    ) { super(); }
}
