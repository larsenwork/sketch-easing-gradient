/* eslint-disable */
module.exports = function(config) {
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
  });
  config.module.rules.push({
    test: /\.(css)$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
    ],
  });
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg|sketch)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]',
    },
  });
  config.module.rules.push({
    test: /\.vue$/,
    use: 'vue-loader',
  });
  config.resolve = {
    extensions: ['.js', '.vue', '.json'],
  };
};
