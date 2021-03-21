import { TemplateDto } from "../templateDto";

export class InvoiceItem extends TemplateDto {
    constructor(
        public itemName: any,
        public itemDescription: any,
        public account: any,
        public amount: any,
        public taxRate: any,
        public value: any,
        public valueDiscountPercentage: any,
        public valueDiscount: any,
    ) { super(); }
}
