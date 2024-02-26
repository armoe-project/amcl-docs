import { defineUserConfig } from 'vuepress'
import theme from './config/theme'
import viteBundler from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  port: 1421,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['script', { async: true, src: 'https://umami.zhenxin.me/script.js', 'data-website-id': 'a799e189-cf7e-4f5a-ac98-71de364f3637' }],
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
  theme
})
