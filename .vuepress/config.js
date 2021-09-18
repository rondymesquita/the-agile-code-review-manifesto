const { description } = require('../package')
const { path } = require('@vuepress/utils')

module.exports = {
  base: "/the-agile-code-review-manifesto/",
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    sidebar: false,
    repo: "https://github.com/rondymesquita/the-agile-code-review-manifesto",
    navbar: [
      // NavbarItem
      {
        text: 'Author',
        link: 'https://github.com/rondymesquita/',
      }
    ],
  },
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
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  // ]
}
