import { writeFile, WriteFileOptions } from "fs";

import { HelperService } from "./helperService";

export class FileWriterService {
    public static writeFileAsync(
        pathToFile: string | number | Buffer | URL,
        data: any,
        options: WriteFileOptions
    ): Promise<Buffer> {
        return HelperService.callbackToPromise(writeFile, [pathToFile, data, options]);
    }
}
