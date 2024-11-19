import { ResolveOptions } from 'webpack'
export const Resolve = (resolvePath: string): ResolveOptions => {
  return  {
    extensions: ['', '.tsx', '.ts', '.js'],
    modules: ['node_modules', resolvePath],
    alias: {
        
    }
  }
}