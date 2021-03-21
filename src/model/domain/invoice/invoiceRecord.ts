import { TemplateDto } from "../templateDto";

export class InvoiceRecord extends TemplateDto {
    constructor(
        public invoiceRef?: any,
        public paymentInstructions?: any,
        public creditorGSTNo?: any,
        public creditorId?: any,
        public creditorName?: any,
        public creditorAddress?: any,
        public creditorPhone?: any,
        public creditorEmail?: any,
        public debtorId?: any,
        public debtorName?: any,
        public debtorAddress?: any,
        public debtorPhone?: any,
        public debtorEmail?: any,
        public isSent?: any,
        public isPaid?: any,
        public amountPaid?: any,
        public amountDue?: any,
        public status?: any,
        public brandingTheme?: any,
        public brandingThemeId?: any,
        public isRepeat?: any,
        public repeatType?: any,

        public invoiceItems?: any[],
    ) { super(); }
}
