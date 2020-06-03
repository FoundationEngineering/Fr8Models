
import { TemplateDto } from "../templateDto";

export class DispatchProofOfDelivery extends TemplateDto {
    constructor(
        public dispatchId?: number,
        public isNeedSignature?: boolean,
        public consignorName?: string,
        public consignorCompanyId?: string,
        public consigneeName?: string,
        public consigneeCompanyId?: string,
        public signatureVector?: string,
        public signatureVectorData?: Blob,
        public signatureVectorDataArray?: Uint8Array,
        public signatureName?: string,
        public signatureInitials?: string,
        public podImageUrl?: string,
        public podDocUrl?: string,
        public podDocData?: any, //JSON STRING
        ) {
        super();
    }
}
