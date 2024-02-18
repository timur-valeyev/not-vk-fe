import webpack from 'webpack'

import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildWebpackDevServer } from './buildWebpackDevServer'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

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
      rules: buildLoaders(options)
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [options.paths.src, 'node_modules'],
      mainFiles: ['index'],
      alias: {}
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(options) : undefined
  }
}
