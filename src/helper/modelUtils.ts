export class ModelUtils {
    constructor(){ }

    // Merges the object fields if the object matchest the src object fields
    public static merge(src: any, obj: any): any {
        if (src && obj) {
            for (var key in src) {
                if (key && src.hasOwnProperty(key)) src[key] = obj[key] ;
            }
        }
        return src;
    }
}
