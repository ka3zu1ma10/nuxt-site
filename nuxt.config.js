const { sourceFileArray } = require('./contents/blogs/summary.json')

const sourceFileNameToUrl = filepath => {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('_')
  return `/blogs/${splitArray[0]}/${splitArray[1]}`
}
const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

export default {
  mode: 'universal',
  head: {
    title: 'kazuma-saitoh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.jsでつくったブログのテンプレート' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'nuxt_blog_sample' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'nuxt_blog_sample' },
      { hid: 'og:url', property: 'og:url', content: 'https://sample.com/' },
      { hid: 'og:description', property: 'og:description', content: 'Nuxt.jsでつくったブログのテンプレート' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
  },
  generate: {
    routes: generateDynamicRoutes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ka-zu-ma.com/',
    exclude: [
      '/about'
    ],
    routes: generateDynamicRoutes
  },
  build: {
    extend(config, ctx) {
    }
  }
}