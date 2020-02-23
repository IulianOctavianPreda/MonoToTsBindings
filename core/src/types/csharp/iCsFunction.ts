import { ICsFunctionParameters } from "./iCsFunctionParameters";
import { ICsModifiers } from "./iCsModifiers";

export interface ICsFunction {
    modifiers?: ICsModifiers;
    returnType: string;
    name: string;
    parameters?: Array<ICsFunctionParameters>;
}
