import {Configuration} from 'webpack'


import { TypesWebpackOptions } from "./types";
import { Rules } from './Rules';
import { Plugins } from './Plugins';
import { Resolve } from './Resolve';

export const WebpackConfig = (options: TypesWebpackOptions): Configuration  => {
    return {
      entry: options.paths.entry,
      output: {
       path: options.paths.distPath,
       filename: '[name].js',
       chunkFilename: '[fullhash].[name].js',
       clean: true,
      },
      module: {
        rules: Rules()
      },
      resolve: Resolve(options.paths.resolvePath),
      plugins: Plugins(options)
    }
}