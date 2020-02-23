import { readdirSync, statSync } from "fs";
import * as path from "path";

export class FileSystemService {
    public static getAllSubFolders(pathToFolder: string): Array<string> {
        const folderList: Array<string> = [];
        const folders: string[] = readdirSync(pathToFolder).filter((file) =>
            statSync(path.join(pathToFolder, file)).isDirectory()
        );
        folders.forEach((folder) => {
            folderList.push(path.join(pathToFolder, folder));
            folderList.push(...this.getAllSubFolders(path.join(pathToFolder, folder)));
        });
        return folderList;
    }

    public static getAllFolders(pathToFolder: string): Array<string> {
        const folderList: Array<string> = [pathToFolder];
        const folders: string[] = readdirSync(pathToFolder).filter((file) =>
            statSync(path.join(pathToFolder, file)).isDirectory()
        );
        folders.forEach((folder) => {
            folderList.push(path.join(pathToFolder, folder));
            folderList.push(...this.getAllSubFolders(path.join(pathToFolder, folder)));
        });
        return folderList;
    }

    public static getAllFilesRecursively(pathToFolder: string, extension?: string): Array<string> {
        const fileList: Array<string> = [];
        const folderList: Array<string> = this.getAllFolders(pathToFolder);
        folderList.forEach((folder) => {
            fileList.push(
                ...readdirSync(folder).filter((file) =>
                    !!extension
                        ? file.endsWith(extension) &&
                          statSync(path.join(pathToFolder, file)).isFile()
                        : statSync(path.join(pathToFolder, file)).isFile()
                )
            );
        });
        return fileList;
    }
}
