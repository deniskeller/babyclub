// const TerserPlugin = require('terser-webpack-plugin');
// const isProd = process.env.NODE_ENV === 'production';
const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};
module.exports = {
  // configureWebpack: {
  //   optimization: {
  //     minimize: true,
  //     minimizer: isProd ? [
  //       new TerserPlugin({
  //         terserOptions: {
  //           ecma: 6,
  //           compress: { drop_console: true },
  //           output: { comments: false, beautify: false }
  //         }
  //       })
  //     ] : []
  //   }
  // },
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  css: [
    { 
      src: '@/assets/less/variables.less',
      lang: 'less'
    }
  ],
  
  
};