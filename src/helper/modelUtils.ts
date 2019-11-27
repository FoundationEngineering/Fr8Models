export class ModelUtils {
    constructor(){ }

    // Merges the object fields if the object matchest the src object fields
    public static merge(src: any, obj: any): any {
        if (src && obj) {
            for (var key in src) {
                if (key && src.hasOwnProperty(key) && obj[key]) src[key] = obj[key] ;
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
        var newobj={}
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
}
