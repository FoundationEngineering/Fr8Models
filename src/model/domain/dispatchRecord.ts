export class DispatchRecord {
// Use data mapper layer translate the backend
    public id: string;
    public flags: string;
    public jobType: string;
    public docketId: string;
    public orderRefId: string;
    public deliveryRefId: string;
    public pickupRefId: string; // TODO: not in back
    public iCOSRef: number;
    public exportCertNumber: string;

    public isNoDisp: boolean;
    public isQuote: boolean;

    public shipPayer: string; // TODO: not in back

    public shipperName: string;
    public shipperAddr: string;

    public consigneeName: string;
    public consigneeAddr: {[key: string]: string}; // NOTE: multi line (4 lines) address

    public createdDate: string; // TODO: best to be a real date obj
    public status: string; // TODO: best to be a real enum obj
    public serviceType: string; // TODO: best to be a real enum obj

    public hirePallets: number;
    public nonHirePallets: number;

    public lifts: number;
    public hireRetn: number;
    public goodsType: number;

    public reqTempDeg: number;
    public actualTempDeg: number;

    public unloadFee: number;
    public noChg: boolean;
    public noDisp: boolean;

    public reqPickupDateTime: string; // TODO: best to be a real date obj
    public actPickupDateTime: string; // TODO: best to be a real date obj

    public reqDeliveryTime: string;
    public actDeliveryTime: string;

    public deliveredTo: string;
    public hasPOD: boolean;
    public comments: string; // TODO: set limit 255

    public nextDepot: string; // TODO: load from db
    public deliveryDepot: string; // TODO: load from db
    public currentDepot: string; // TODO: load from db
    constructor(args: any) {
        this.id = '';
        this.flags = '';
        this.jobType = '';
        this.docketId = '';
        this.orderRefId = '';
        this.deliveryRefId = '';
        this.pickupRefId = ''; // TODO= not in back
        this.iCOSRef = 0;
        this.exportCertNumber = '';
        this.isNoDisp = false;
        this.isQuote = false;
        this.pickupRefId = ''; // TODO= not in back
        this.shipperName = '';
        this.shipperAddr = '';
        this.consigneeName = '';
        this.consigneeAddr = {}; // NOTE= multi line (4 lines) address
        this.createdDate = ''; // TODO= best to be a real date obj
        this.status = ''; // TODO= best to be a real enum obj
        this.serviceType = ''; // TODO= best to be a real enum obj
        this.hirePallets = 0;
        this.nonHirePallets = 0;
        this.lifts = 0;
        this.hireRetn = 0;
        this.goodsType = 0;
        this.reqTempDeg = 0;
        this.actualTempDeg = 0;
        this.unloadFee = 0;
        this.noChg = false;
        this.noDisp = false;
        this.reqPickupDateTime = ''; // TODO= best to be a real date obj
        this.actPickupDateTime = ''; // TODO= best to be a real date obj
        this.reqDeliveryTime = '';
        this.actDeliveryTime = '';
        this.deliveredTo = '';
        this.hasPOD = false;
        this.comments = ''; // TODO= set limit 255
        this.nextDepot = ''; // TODO= load from db
        this.deliveryDepot = ''; // TODO= load from db
        this.currentDepot = ''; // TODO: load from db
        this.shipPayer = '';

        // Load in kwargs here
        (Object as any).assign(this, args);
    }
}
