export class RatingCardMapper {
    static parseConfigV2(unparsedConfig: any): any {
        const defaultRateObject = {};
        const parsedConfig = JSON.parse(JSON.stringify(unparsedConfig));
        // V2 Parsing
        const mapFunc = (v: any) => {
            const locationKey = Object.keys(v)[0];
            const temp = {
                [locationKey]: v[locationKey]
            };
            // console.log(locationKey, v);
            return temp;
        };
        const reduceFunc = (acc: any, curr: any) => {
            let currKey = Object.keys(curr)[0];
            let temp = {
                [currKey]: curr[currKey]
            }; 
            if (acc) {
                temp = Object.assign(temp, acc);
            }
            return temp;
        };
        parsedConfig.majorLocations = parsedConfig.majorLocations.map(mapFunc);

        // console.log(parsedConfig.majorLocations);
        parsedConfig.majorLocations = parsedConfig.majorLocations.length !== 0 ? parsedConfig.majorLocations.reduce(reduceFunc) : defaultRateObject;

        parsedConfig.minorLocations = parsedConfig.minorLocations.map(mapFunc);
        parsedConfig.minorLocations = parsedConfig.minorLocations.length !== 0 ? parsedConfig.minorLocations.reduce(reduceFunc) : defaultRateObject;

        parsedConfig.pricingRateLevelList = parsedConfig.pricingRateLevelList.map(mapFunc);
        parsedConfig.pricingRateLevelList = parsedConfig.pricingRateLevelList.length !== 0 ? parsedConfig.pricingRateLevelList.reduce(reduceFunc) : defaultRateObject;

        return parsedConfig;
    }
}
