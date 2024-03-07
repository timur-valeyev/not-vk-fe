import type { Configuration } from 'webpack-dev-server'

import { BuildOptions } from './types/config'

export function buildWebpackDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true
  }
}
