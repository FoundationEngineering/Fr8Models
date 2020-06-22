import { DispatchRecord } from '../model/domain/dispatch/dispatchRecord';
import { Quote } from '../model/domain/quote/quote';
import { Company } from '../model/domain/company';
import { PlaceLocationAddress } from '../model/domain/placeLocationAddress';

export class DispatchRecordMapper {
    public static mapFromQuote(quote: Quote) {
        const dispatch = new DispatchRecord();
        dispatch.companyId = parseInt(quote.companyId as any, 10) || undefined;
        dispatch.parentCompanyId = parseInt(quote.parentCompanyId as any, 10) || undefined;
        dispatch.nonHirePallets = parseInt(quote.palletNo as any, 10) || undefined; // default non hire
        dispatch.weight = parseInt(quote.weight as any, 10) || undefined;
        dispatch.cubic = parseInt(quote.mass as any, 10) || undefined; // mass miss named here, should be cubic
        dispatch.quoteId = parseInt(quote.id as any, 10) || undefined;

        dispatch.from = quote.from;
        dispatch.to = quote.to;

        // Additional costs from quote can be ref when query group join
        return dispatch;
    }
    public static mapFromRecordToDto(dispatch: DispatchRecord) {
        const dto = JSON.parse(JSON.stringify(dispatch));
        delete dto.manifest;
        delete dto.quote;
        delete dto.dispatchComments;
        delete dto.dispatchCostList;
        delete dto.dispatchDocs;
        delete dto.dispatchHistories;
        delete dto.dispatchItemLines;
        delete dto.dispatchMoves;
        delete dto.dispatchNotes;
        delete dto.dispatchProofs;
        
        dto.companyId = parseInt(dto.companyId as any, 10) || null;
        dto.parentCompanyId = parseInt(dto.parentCompanyId as any, 10) || null;
        return dto;
    }
    public static mapFromICOSDispatchData(jsonObject: any): any {

        const dispatch: DispatchRecord = new DispatchRecord();

        dispatch.flags = this.findElementString(jsonObject, 'Flags');
        dispatch.docket = this.findElementString(jsonObject, 'Docket');

        dispatch.jobType = this.findElementString(jsonObject, 'Job Type');
        dispatch.status = this.findElementString(jsonObject, 'Status');

        dispatch.iCOSRef = this.findElementNumber(jsonObject, 'ICOS Ref');
        dispatch.orderRef = this.findElementString(jsonObject, 'Order Ref');
        dispatch.pickupRef = this.findElementString(jsonObject, 'Pickup Ref');
        dispatch.deliveryRef = this.findElementString(jsonObject, 'Delivery Ref');

        dispatch.customer = this.findElementString(jsonObject, 'Customer');

        dispatch.pickupFrom = this.findElementString(jsonObject, 'Pickup');
        dispatch.consigneeName = this.findElementString(jsonObject, 'Deliver');
        dispatch.consignorName = this.findElementString(jsonObject, 'Pickup');
        dispatch.from = this.findElementString(jsonObject, 'From') ? 
            this.findElementString(jsonObject, 'From') :
            this.findElementString(jsonObject, 'Pickup Address'); // Suburb
        dispatch.to = this.findElementString(jsonObject, 'To') ?
            this.findElementString(jsonObject, 'To') :
            this.findElementString(jsonObject, 'Delivery Address'); // Suburb

        dispatch.pickupAddr = DispatchRecordMapper.getPickupAddressStringFromICOSDispatch(jsonObject);
        dispatch.pickupAddrLocality = this.findElementString(jsonObject, 'From Locality');
        dispatch.deliverAddr = DispatchRecordMapper.getDeliveryAddressStringFromICOSDispatch(jsonObject);
        dispatch.deliverAddrLocality = this.findElementString(jsonObject, 'To Locality');
        
        dispatch.vehicle = this.findElementString(jsonObject, 'Vehicle');
        dispatch.lastVehicle = this.findElementString(jsonObject, 'Last Vehicle');

        dispatch.shift = this.findElementString(jsonObject, 'Shift');

        dispatch.goods = this.findElementString(jsonObject, 'Goods');
        dispatch.goodsType = this.findElementString(jsonObject, 'Goods Type');

        dispatch.reqPickupDateTime = this.findElementDate(jsonObject, 'Required Pickup');
        dispatch.reqDeliveryDateTime = this.findElementDate(jsonObject, 'Required Delivery');

        dispatch.pUPTZ = this.findElementString(jsonObject, 'PUP TZ');
        dispatch.dELTZ = this.findElementString(jsonObject, 'DEL TZ');

        dispatch.weight = this.findElementNumber(jsonObject, 'Weight');
        dispatch.cubic = this.findElementNumber(jsonObject, 'Cubic');

        dispatch.actPickupDateTime = this.findElementDate(jsonObject, 'Picked up');
        dispatch.actDeliveryDateTime = this.findElementDate(jsonObject, 'Delivered');

        // May or may not need this for sync
        // dispatch.lastChange = this.findElementString(jsonObject, 'Last Change');

        dispatch.deliveredToName = this.findElementString(jsonObject, 'Delivered To');

        dispatch.palletsHire = this.findElementNumber(jsonObject, 'H/Plts');
        // Seems there is no non-hire pallets in the csvs export

        dispatch.isCharged = this.isYes(jsonObject['Chg']);
        dispatch.isOverride = this.isYes(jsonObject['Ovride']);

        dispatch.invoice = this.findElementNumber(jsonObject, 'Invoice');

        dispatch.commodity = this.findElementString(jsonObject, 'Commodity');
        dispatch.bookedBy = this.findElementString(jsonObject, 'Booked By');

        dispatch.lifts = this.findElementNumber(jsonObject, 'Lifts');

        dispatch.currentLocation = this.findElementString(jsonObject, 'Now At');
        dispatch.nextLocation = this.findElementString(jsonObject, 'Going To');

        dispatch.pAKUPKTZ = this.findElementString(jsonObject, 'PAK/UPK TZ');

        dispatch.pickupDepot = this.findElementString(jsonObject, 'Pickup Depot');
        dispatch.currentDepot = this.findElementString(jsonObject, 'Current Depot');
        dispatch.deliveryDepot = this.findElementString(jsonObject, 'Delivery Depot');
        dispatch.nextDepot = this.findElementString(jsonObject, 'Next Depot');

        dispatch.quantity = this.findElementNumber(jsonObject, 'Quantity');
        dispatch.bookedDateTime = this.findElementDate(jsonObject, 'Booked Date');

        delete dispatch.id;

        return dispatch;
    }

    public static mapDispatchCompanyId(companyList: any[], dispatchRecordList: any[]) {
        return dispatchRecordList.map((item) => {
            item.companyId = (companyList.find((fItem) => fItem.companyName === item.customer) || { id: undefined }).id;
            return item;
        });
    }

    public static getDeliveryAddressStringFromICOSDispatch(icosDispatchRecord: any) {
        const address = new PlaceLocationAddress();

        address.streetAddress = this.findElementString(icosDispatchRecord, 'Pickup Address');
        address.suburb = this.findElementString(icosDispatchRecord, 'From');
        address.city = this.findElementString(icosDispatchRecord, 'From Locality');

        return PlaceLocationAddress.getAddressString(address);
    }
    public static getPickupAddressStringFromICOSDispatch(icosDispatchRecord: DispatchRecord) {
        const address = new PlaceLocationAddress();

        address.streetAddress = this.findElementString(icosDispatchRecord, 'Delivery Address');
        address.suburb = this.findElementString(icosDispatchRecord, 'To');
        address.city = this.findElementString(icosDispatchRecord, 'To Locality');

        return PlaceLocationAddress.getAddressString(address);
    }
    
    public static getDeliveryAddressStringFromDispatch(dispatchRecord: DispatchRecord) {
        if (dispatchRecord && dispatchRecord.deliverPlacelocationAddress) {
            return PlaceLocationAddress.getAddressString(dispatchRecord.deliverPlacelocationAddress);
        } else { 
            return '';
        }
    }
    public static getPickupAddressStringFromDispatch(dispatchRecord: DispatchRecord) {
        if (dispatchRecord && dispatchRecord.pickupPlacelocationAddress) {
            return PlaceLocationAddress.getAddressString(dispatchRecord.pickupPlacelocationAddress);
        } else { 
            return '';
        }
    }
    public static mapDispatchAddresses(dispatchRecord: DispatchRecord) {
        const temp = JSON.parse(JSON.stringify(dispatchRecord));
        temp.pickupAddr = DispatchRecordMapper.getPickupAddressStringFromDispatch(dispatchRecord);
        temp.deliverAddr = DispatchRecordMapper.getDeliveryAddressStringFromDispatch(dispatchRecord);
        return temp;
    }
    public static mapDispatchListAddresses(dispatchRecordList: DispatchRecord[]) {
        return  dispatchRecordList.map(DispatchRecordMapper.mapDispatchAddresses);
    }

    private static findElementString(jsonObject: any, key: any) {
        if (jsonObject.hasOwnProperty(key)) {
            const value: string = jsonObject[key];

            if (!value) {
                return undefined;
            }

            return value.length ? value : undefined;
        }
        return undefined;
    }

    private static findElementNumber(jsonObject: any, key: any) {
        try {
            if (jsonObject.hasOwnProperty(key)) {
                const value = jsonObject[key];

                const parsedNumber = Number.parseInt(value);

                if (isNaN(parsedNumber)) {
                    return undefined;
                }

                return parsedNumber;
            }
        } catch (exception) {
            return undefined;
        }

        return undefined;
    }

    private static findElementDate(jsonObject: any, key: any) {
        try {
            if (jsonObject.hasOwnProperty(key)) {
                const value = jsonObject[key];
                if (!value) {
                    return undefined;
                }

                const parsedDate = Date.parse(value);

                if (isNaN(parsedDate)) {
                    return undefined;
                }

                return new Date(parsedDate);
            }
        } catch (exception) {
            return undefined;
        }

        return undefined;
    }

    public static isYes(prop: any): boolean {
        return prop && typeof prop === 'string' && prop.toLowerCase() === 'yes' ? true : false;
    }
}

