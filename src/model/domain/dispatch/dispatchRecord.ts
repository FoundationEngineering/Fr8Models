import { DispatchDoc } from "./dispatchDoc";
import { DispatchHistory } from "./dispatchHistory";

export class DispatchRecord {
// Use data mapper layer translate the backend
constructor(
    public id?: number,
    public userId?: number,
    public companyId?: number,
    public parentCompanyId?: number,
    public manifestId?: number,
    public quoteId?: number,
    public createdDate?: Date,
    public updatedDate?: Date,

    public historyData?: string,

    public docket?: string,
    public orderRef?: string,
    public deliveryRef?: string,
    public pickupRef?: string,
    public iCOSRef?: number,
    
    public flags?: string,
    public jobType?: string,
    public comodity?: string,

    public bookedBy?: string,

    public exportCertNumber?: string,
    
    public customer?: string,

    public consigneeId?: number,
    public consigneeName?: string,
    public pickupAddr?: string,
    public pickupAddrLocality?: string,
    public deliverAddr?: string,
    public deliverAddrLocality?: string,

    public status?: string,
    public serviceType?: string,

    public palletsHire?: number,
    public nonHirePallets?: number,

    public lifts?: number,
    public goodsType?: string,
    // Name
    public goods?: string,
    public commodity?: string,
    
    public reqTempDeg?: number,
    public actualTempDeg?: number,

    public unloadFee?: number,

    public bookedDateTime?: Date,
    public reqPickupDateTime?: Date,
    public actPickupDateTime?: Date,

    public reqDeliveryDateTime?: Date,
    public actDeliveryDateTime?: Date,

    public pUPTZ?: string,
    public dELTZ?: string,

    public quantity?: number,
    public weight?: number,
    public cubic?: number,

    public pAKUPKTZ?: string,

    // from depo
    public pickupFrom?: string,
    // Seems like general area locations
    public from?: string,
    public to?: string,

    public vehicle?: string,
    public lastVehicle?: string,

    // Prev id number, perhaps
    public shift?: string,

    public deliveredToName?: string,
    
    public isCharged?: boolean,
    public isOverride?: boolean,

    public invoice?: number,

    public hasPOD?: boolean,
    public comments?: string,

    public pickupDepot?: string,
    public currentDepot?: string,
    public nextDepot?: string,
    public deliveryDepot?: string,

    public currentLocation?: string,
    public nextLocation?: string,

    // Added SQL 1 to Many Fields
    public dispatchDocs?: DispatchDoc[],
    public dispatchHistories?: DispatchHistory[],
    public dispatchItemLines?: any[],
    public dispatchMoves?: any[],
    public dispatchNotes?: any[],
    public dispatchComments?: any[],
    public dispatchProofs?: any[]
) {}

    init(args: any) {
        // Load in kwargs here
        (Object as any).assign(this, args);
    }

}
