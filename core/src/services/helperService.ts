export class HelperService {
    public static callbackToPromise(func: (...args: any[]) => void, args: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            func(...args, (err: any, ...results: any[]) => {
                if (!!err) {
                    reject(err);
                } else {
                    resolve(...results);
                }
            });
        });
    }

    public static updateObject(obj1: any, obj2: any) {
        const targetProperties: Array<string> = Object.keys(obj1);
        const properties: Array<string> = Object.keys(obj2);
        properties.forEach((property: string) => {
            if (targetProperties.includes(property)) {
                obj1[property] = obj2[property];
            }
        });
    }
}
