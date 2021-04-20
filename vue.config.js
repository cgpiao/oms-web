module.exports = {
   chainWebpack: (config) => {
      config
         .resolve.extensions.add('.ts').add('.tsx')
         .end().end()
         .module
         .rule('typescript')
         .test(/\.tsx?$/)
         .use('babel-loader')
         .loader('babel-loader')
         .end()
         .use('ts-loader')
         .loader('ts-loader')
         .options({
            transpileOnly: true,
            appendTsSuffixTo: [
               '\\.vue$',
            ],
            happyPackMode: false,
         })
         .end();
   }
}
