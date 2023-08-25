import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import webpack from 'webpack'
import {BuildOptions} from './types/config'
import {buildWebpackDevServer} from './buildWebpackDevServer'

export function  buildWebpackConfig(options: BuildOptions): webpack.Configuration {
const {mode, paths, isDev} = options

 return {
   mode,
   entry: paths.entry,
   output: {
     path: paths.build,
     filename: 'bundle.[hash].js',
     clean: true
   },
   plugins: buildPlugins(options),
   module: {
     rules: buildLoaders(options),
   },
   resolve: {
     extensions: ['.tsx', '.ts', '.js'],
   },
   devtool: isDev ? 'inline-source-map' : undefined,
   devServer: isDev? buildWebpackDevServer(options): undefined
 }
}
