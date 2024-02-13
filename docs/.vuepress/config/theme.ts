import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEn, navbarZh } from './navbar'
import { sidebarEn, sidebarZh } from './sidebar'

export default hopeTheme({
  iconAssets: 'fontawesome-with-brands',
  repo: 'armoe-project/amcl-app',
  docsRepo: 'armoe-project/amcl-docs',
  docsDir: 'docs',
  logo: '/logo.png',
  locales: {
    '/': {
      navbar: navbarZh,
      sidebar: sidebarZh
    },
    '/en/': {
      navbar: navbarEn,
      sidebar: sidebarEn
    }
  },
  plugins: {
    searchPro: {
      indexContent: true
    }
  }
})
