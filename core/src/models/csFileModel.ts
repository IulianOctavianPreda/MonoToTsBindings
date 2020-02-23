import { ICsClass } from "../types/csharp/iCsClass";
import { ICsFile } from "../types/csharp/iCsFile";
import { ICsFunction } from "../types/csharp/iCsFunction";

export class CsFileModel implements ICsFile {
    public namespace?: string;
    public class?: ICsClass;
    public functions?: Array<ICsFunction>;

    constructor() {}

    public async parseFile(filePath: string): Promise<void> {
        // return await FileReaderService.readFileAsync(filePath).then((lines: string[]) => {
        //     for (let i = 0; i < lines.length; i++) {
        //         const line = lines[i].trim();
        //         if (line.startsWith("namespace")) {
        //             this.namespace = line.split(" ")[1];
        //         }
        //         if (line.includes("namespace")) {
        //             this.namespace = line.split(" ")[1];
        //         }
        //         if (line.startsWith("public static")) {
        //             // if(line.) { }
        //         }
        //         i++;
        //     }
        // });
    }

    public outputJs() {}

    public outputTs() {}
}
