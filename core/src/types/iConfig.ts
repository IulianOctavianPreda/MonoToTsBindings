export interface IConfig {
    pathToCSharpDir?: string;
    pathToCSharpSolution?: string;
    outputClasses?: boolean;
    outputFolder?: string;
    outputJs?: boolean;
    multiThreaded?: boolean;
    inMemory?: boolean;
    packageTheClasses?: boolean; // (search and find the dlls required,
    // requires to have dotnet installed and the project should be part of the solution
    // otherwitse perhaps mono is the solution )
}
