#!/usr/bin/env node
import { FileReaderService } from "./services/fileReaderService";
import { FileSystemService } from "./services/fileSystemService";
import { HelperService } from "./services/helperService";
import { IConfig } from "./types/iConfig";

const config: IConfig = {
    pathToCSharpDir: "./mono/csharp",
    pathToCSharpSolution: "./mono/csharp",
    outputClasses: true,
    outputFolder: "./mono/types",
    outputJs: false,
    multiThreaded: false,
    inMemory: true,
    packageTheClasses: true // (search and find the dlls required,
    // requires to have dotnet installed and the project should be part of the solution
    // otherwitse perhaps mono is the solution )
};

const args = process.argv;

console.log(args);
console.log(config);

if (!!args[2]) {
    const configFromArgs: IConfig = JSON.parse(
        FileReaderService.readFileToBuffer(args[2]).toString()
    );
    HelperService.updateObject(config, configFromArgs);
}

const fileList: string[] = [];

if (!!config.pathToCSharpSolution) {
    fileList.push(...FileSystemService.getAllFilesRecursively(config.pathToCSharpSolution, ".cs"));
} else if (!!config.pathToCSharpDir) {
    fileList.push(...FileSystemService.getAllFilesRecursively(config.pathToCSharpDir, ".cs"));
}
console.log(fileList);

// Promise.all([fileList.map(async (filePath) => await parseFile(filePath))]);
