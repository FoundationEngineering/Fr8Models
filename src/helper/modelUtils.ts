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

    public static uuidv4(): string {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text.toLocaleLowerCase();
    }

    public static entries (obj: any) {
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
}
