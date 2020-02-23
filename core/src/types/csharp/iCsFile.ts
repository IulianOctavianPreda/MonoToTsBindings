import { ICsClass } from "./iCsClass";
import { ICsFunction } from "./iCsFunction";

export interface ICsFile {
    namespace?: string;
    class?: ICsClass;
    functions?: Array<ICsFunction>;
}
