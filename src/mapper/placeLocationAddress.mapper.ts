import { PlaceLocationAddress } from "../model/domain/placeLocationAddress";

export class PlaceLocationAddressMapper {
    public static getPlaceLocationAsString(item: PlaceLocationAddress): string {
        if (item) {
            const streetAddress = item.streetAddress ? item.streetAddress + ', ' : '';
            const suburb = item.suburb ? item.suburb + ', ' : '';
            const city = item.city ? item.city + ', ' : '';
            const town = item.town ? item.town + ', ' : '';
            const postCode = item.postCode ? item.postCode + ', ' : '';
            const region = item.region ? item.region + ', ' : '';
            const regionGroup = item.regionGroup ? item.regionGroup + ', ' : '';

            const label = (streetAddress + suburb + city + town + postCode + region + regionGroup).slice(0, -2);

            return label;
        } else {
            return '';
        }
    }

}
