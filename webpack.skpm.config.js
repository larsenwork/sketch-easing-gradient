const CopyWebpackPlugin = require('copy-webpack-plugin')

/* eslint-disable no-param-reassign */

module.exports = function(config, isNotResources) {
  config.module.rules.push({
    test: /\.(html)$/,
    use: [
      {
        loader: '@skpm/extract-loader',
      },
      {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href'],
          interpolate: true,
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.(css)$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'postcss-loader',
    ],
  })
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg|sketch)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]',
    },
  })
  config.module.rules.push({
    test: /\.(vue)$/,
    use: 'vue-loader',
  })
  if (!isNotResources) {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'resources/assets',
          to: '',
          ignore: ['*.sketch'],
        },
      ])
    )
  }
  config.resolve = {
    extensions: ['.js', '.vue', '.json'],
  }
}
