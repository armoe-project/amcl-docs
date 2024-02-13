import { sidebar } from 'vuepress-theme-hope'

const childrens = {
  guide: [],
  install: ['windows', 'macos', 'linux']
}

const sidebarZh = sidebar({
  '/': [
    {
      text: '下载',
      icon: 'download',
      link: 'download.md'
    },
    {
      text: '安装',
      prefix: 'install',
      link: 'install/README.md',
      icon: 'fa-brands fa-instalod',
      children: childrens.install
    },
    {
      text: '指南',
      prefix: 'guide',
      link: 'guide/README.md',
      icon: 'lightbulb',
      children: childrens.guide
    }
  ]
})

const sidebarEn = sidebar({
  '/en/': [
    {
      text: 'Download',
      icon: 'download',
      link: 'download'
    },
    {
      text: 'Install',
      prefix: 'install',
      link: 'install',
      icon: 'fa-brands fa-instalod',
      children: childrens.install
    },
    {
      text: 'Guide',
      prefix: 'guide',
      link: 'guide',
      icon: 'lightbulb',
      children: childrens.guide
    }
  ]
})

export { sidebarZh, sidebarEn }
