import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildEnv, BuildPath} from './config/build/types/config'
import path from 'path'


export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3001

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
}
