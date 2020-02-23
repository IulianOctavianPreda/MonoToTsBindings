import { CsAccessLevel } from "core/src/types/enums/csAccessLevels";

export interface ICsModifiers {
    accessLevel?: CsAccessLevel;
    static?: boolean;
    async?: boolean;
}
