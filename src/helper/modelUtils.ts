export class ModelUtils {
    constructor() { }

    // Merges the object fields if the object matchest the src object fields
    public static merge(src: any, obj: any): any {
        if (src && obj) {
            for (var key in src) {
                if (key && src.hasOwnProperty(key) && obj[key]) src[key] = obj[key];
            }
        }
        return src;
    }

    public static keyValueToList(src: any): any {
        const keys: any = Object.keys(src);
        const list: Array<any> = [];
        keys.forEach((value: any) => {
            list.push(src[value]);
        });
        return list;
    }

    public static keysToLowerCase(obj: any): any {
        var key, keys = Object.keys(obj);
        var n = keys.length;
        var newobj = {}
        while (n--) {
            key = keys[n];
            (newobj as any)[key.toLowerCase()] = obj[key];
        }
        return newobj;
    }

    public static valuesToLowerCase(obj: any): any {
        obj.forEach((item: string) => {
            const idx = obj.indexOf(item);
            obj[idx] = item.toLowerCase();
        });
        return obj;
    }

    public static uuidv4(): string {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text.toLocaleLowerCase();
    }

    public static getRandomNumber(length?: number) {
        const tempLength = length ? length : 1000000000000000000;
        return Math.floor(Math.random() * tempLength);
    }

    public static entries(obj: any) {
        const resArray = [];
        if (obj) {
            const ownProps = Object.keys(obj);
            let i = ownProps.length;
            while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
            }
        }
        return resArray;
    }

    public static isEmpty(obj: any) {
        if (obj != null) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
        }
        return true;
    }

    public static isArrayEmpty(arr: any) {
        if (arr == null) {
            return true;
        } else if (arr.length == null) {
            return true;
        } else if (arr.length <= 0) {
            return true;
        }
    }

    public static isJsonString(str: any) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    public static getCopy(obj: any) {
        return JSON.parse(JSON.stringify(obj));
    }

    public static jsonSafeStringify(obj: any, indent = 2) {
        let cache: any[] = [];
        const retVal = JSON.stringify(
            obj,
            (key, value) =>
                typeof value === "object" && value !== null
                    ? (cache as any).includes(value)
                        ? undefined // Duplicate reference found, discard key
                        : cache.push(value) && value // Store value in our collection
                    : value,
            indent
        );
        (cache as any) = null;
        return retVal;
    }

    public static modifyMap(map: any, cb: Function): any {
        const mapCopy = ModelUtils.getCopy(map);
        return Object.keys(mapCopy).map((key) => {
            let value = mapCopy[key];

            // Custom CB
            value = cb(value, key);

            return {
                [key]: value
            };
        }).reduce((prev, curr) => Object.assign((prev || {}), curr));
    }

    public static listToMap(list: any): any[] {
        return list.reduce((prev: any, curr: any) => Object.assign((prev || {}), curr));
    }
    public static mapToList(map: any): any {
        return Object.keys(map).map((item) => map[item]);
    }
}
