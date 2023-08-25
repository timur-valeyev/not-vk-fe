import {WebpackPluginInstance, ProgressPlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css'
    }),
    new ProgressPlugin()
  ]
}
