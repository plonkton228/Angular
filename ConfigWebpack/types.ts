

interface TypesPath {
    entry: string,
    resolvePath: string,
    distPath: string,
    tsConfigPath: string,
    indexPath: string,
    stylePaths: string[]
}
export interface TypesWebpackOptions {
    paths: TypesPath
}