"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use data mapper layer translate the backend
class default_1 {
    constructor(args) {
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
        Object.assign(this, args);
    }
}
exports.default = default_1;
