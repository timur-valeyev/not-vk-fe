import path from 'path'

import webpack from 'webpack'

import { cssLoader } from '../build/loaders/cssLoader'
import { BuildPath } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    entry: '',
    build: ''
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(cssLoader(true))

  return config
}
