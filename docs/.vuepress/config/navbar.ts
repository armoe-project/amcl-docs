import { navbar } from 'vuepress-theme-hope'

const navbarZh = navbar([
  { text: '首页', link: '/', icon: 'home' },
  { text: '下载', link: '/download.md', icon: 'download' },
  { text: '安装', link: '/install/README.md', icon: 'fa-brands fa-instalod' },
  { text: '指南', link: '/guide/README.md', icon: 'lightbulb' },
  { text: '常见问题', link: '/faq.md', icon: 'circle-question' },
  {
    text: 'QQ群',
    link: 'https://jq.qq.com/?_wv=1027&k=9Xs1RMt5',
    icon: 'fa-brands fa-qq'
  }
])

const navbarEn = navbar([
  { text: 'Home', link: '/en/', icon: 'home' },
  { text: 'Download', link: '/en/download.md', icon: 'download' },
  { text: 'Install', link: '/en/install/README.md', icon: 'fa-brands fa-instalod' },
  { text: 'Guide', link: '/en/guide/README.md', icon: 'lightbulb' },
  { text: 'FAQ', link: '/en/faq.md', icon: 'circle-question' },
  {
    text: 'Discord',
    link: 'https://discord.gg/twQgJNufYn',
    icon: 'fa-brands fa-discord'
  }
])

export { navbarZh, navbarEn }
