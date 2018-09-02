const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/* eslint-disable no-param-reassign */
module.exports = function(config, isNotResources) {
  config.module.rules = [
    ...config.module.rules,
    {
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
    },
    {
      test: /\.(css)$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|svg|sketch)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
      },
    },
    {
      test: /\.(vue)$/,
      loader: 'vue-loader',
    },
  ]
  if (!isNotResources) {
    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin([
        {
          from: 'resources/assets',
          to: '',
          ignore: ['*.sketch'],
        },
      ]),
      new VueLoaderPlugin(),
    ]
  }
  config.resolve = {
    extensions: ['.js', '.vue', '.json'],
  }
}
