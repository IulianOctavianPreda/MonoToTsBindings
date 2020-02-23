import { readFile, readFileSync } from "fs";

import { HelperService } from "./helperService";

export interface IFileReaderOptions {
    encoding?: null | undefined;
    flag?: string | undefined;
}

export class FileReaderService {
    public static readFileToBufferAsync(
        pathToFile: string | number | Buffer | URL,
        options: IFileReaderOptions | string | null | undefined = "utf8"
    ): Promise<Buffer> {
        return HelperService.callbackToPromise(readFile, [pathToFile, options]);
    }

    public static readFileToBuffer(
        pathToFile: string | number | Buffer | URL,
        options: IFileReaderOptions | string | null | undefined = "utf8"
    ): string | Buffer {
        return readFileSync(pathToFile, options);
    }

    public static async readFileAsync(pathToFile: string): Promise<Array<string>> {
        const data = await this.readFileToBufferAsync(pathToFile);
        return data.toString().split(/\r?\n/);
    }
}
