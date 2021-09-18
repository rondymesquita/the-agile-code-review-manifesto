const { description } = require('../package')
const { path } = require('@vuepress/utils')

module.exports = {
  base: "/the-agile-code-review-manifesto/",
  bundlerConfig: {
    chainWebpack: function(config, isServer, isBuild){

      config.module
      .rule('compile')
        .test(/\.md$/)
          .use('html')
          .loader('html-loader')
          .end()
          .use('markdown')
          .loader('markdown-loader')

    },
  },
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    sidebar: [],
    // sidebar: [
    //   {
    //     text: '🇧🇷 pt-BR',
    //     link: 'README.pt-BR.md'
    //   },
    //   {
    //     text: '🇺🇸 en-US',
    //     link: 'README.md'
    //   }
    // ],
  },
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  // ]
}
