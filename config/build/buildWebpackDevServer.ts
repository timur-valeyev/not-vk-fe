import {BuildOptions} from './types/config'
import type {Configuration} from 'webpack-dev-server'

export function buildWebpackDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: false
  }
}
