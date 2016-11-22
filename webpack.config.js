const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function (webpackConfig, env) {
  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
  }]);

  // Enable hmr for development.
  if (env === 'development') {
    webpackConfig.babel.plugins.push('dva-hmr');
  }

  // CSS Modules Support.
  // Parse all less files as css module.
  console.log(webpackConfig.module.loaders, '!!!!!!!')

  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.include = [/node_modules/, /global\.less/]; // treat global.less as non-css-modules less file
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = [/node_modules/, /global\.less/]; // treat global.less as non-css-modules less file
      loader.test = /\.less$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.css$/;
    }
    if (loader.test.toString() === '/\\.module\\.css$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.css$/;
    }
  });

  console.log(webpackConfig.module.loaders)

  return webpackConfig;
};
