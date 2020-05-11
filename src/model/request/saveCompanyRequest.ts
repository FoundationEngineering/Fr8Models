import { PlaceLocationAddress } from "../domain/placeLocationAddress";

export class SaveCompanyRequest {
    constructor(public companyName?: string, public companyMainEmail?: string, public companyQuoteEmail?: string, public companyNotifyEmail?: string, public addressList?: PlaceLocationAddress[]){ }
}
