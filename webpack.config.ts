import {Configuration} from 'webpack'
import { WebpackConfig } from "./ConfigWebpack/webpackConfig"
import { TypesWebpackOptions } from './ConfigWebpack/types'
import  path  from 'path'
module.exports =  async (env: any): Promise<Configuration> => {

   const settings: TypesWebpackOptions = {
      paths: {
         entry: './src/main.ts',
         resolvePath: './src',
         distPath:  __dirname + '/dist',
         tsConfigPath:  'tsconfig.app.json',
         indexPath: './src/index.html',
         stylePaths: [`'./src/styles.scss'`]
      }
   }
    
   return  new Promise((resolve,reject) => {
      resolve(WebpackConfig(settings))
   })
}

