import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './config/theme'

export default defineUserConfig({
  port: 1421,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['script', { src: 'https://cdn.zhenxin.xyz/static/js/autoGray.js' }]
  ],
  locales: {
    '/': {
      title: 'AMCL 使用文档',
      lang: 'zh-CN'
    },
    '/en/': {
      title: 'ACML Documents',
      lang: 'en-US'
    }
  },
  theme,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-MWKT4QD2W0'
    }),
    searchProPlugin({
      indexContent: true
    })
  ]
})
