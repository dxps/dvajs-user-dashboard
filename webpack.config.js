const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function (webpackConfig, env) {
  webpackConfig.babel.babelrc = false;
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
<<<<<<< HEAD
=======
    style: true,
>>>>>>> d4a6a4bc66e5eb7b1f568f3fe98b2208d972c08c
  }]);

  // Enable hmr for development.
  if (env === 'development') {
    webpackConfig.babel.plugins.push('dva-hmr');
  }
<<<<<<< HEAD

=======
  
>>>>>>> d4a6a4bc66e5eb7b1f568f3fe98b2208d972c08c
  // CSS Modules Support.
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
<<<<<<< HEAD
      loader.include = [/node_modules/, /global\.less/]; // treat global.less as non-css-modules less file
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = [/node_modules/, /global\.less/]; // treat global.less as non-css-modules less file
=======
      loader.include = /node_modules/;
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = /node_modules/;
>>>>>>> d4a6a4bc66e5eb7b1f568f3fe98b2208d972c08c
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

  return webpackConfig;
};
