// const { sourceFileArray } = require("./contents/blogs/summary.json")

// const sourceFileNameToUrl = (filepath) => {
//   const deleteExt = filepath.replace(".md", "")
//   const fileName = deleteExt.split("/")[deleteExt.split("/").length - 1]
//   const splitArray = fileName.split("_")
//   return `/blogs/${splitArray[0]}/${splitArray[1]}`
// }

// const generateDynamicRoutes = (callback) => {
//   const routes = sourceFileArray.map((sourceFileName) => {
//     return sourceFileNameToUrl(sourceFileName)
//   })
//   /* eslint no-unused-vars: 0 */
//   callback(null, routes)
// }

// const generaterOGP = (callback) => {
//   const routes = []
//   const fs = require("fs")
//   const fileNames = fs.readdirSync("./contents/blogs/json/")
//   for (const key in fileNames) {
//     const page = JSON.parse(
//       fs.readFileSync("./contents/blogs/json/" + fileNames[key], "utf8")
//     )
//     routes.push({
//       route: "/ogp-" + page.id,
//       payload: page,
//     })
//   }

//   callback(null, routes)
// }

const SITE_TITLE = "Kazuma Saito"

export default {
  mode: "universal",
  head: {
    title: SITE_TITLE,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Kazuma Saitoのポートフォリオサイトです。私について知りたい方はこちらのサイトをご覧いただけるとうれしいです。",
      },
      { hid: "og:site_name", property: "og:site_name", content: SITE_TITLE },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: SITE_TITLE },
      { hid: "og:url", property: "og:url", content: "https://ka-zu-ma.com/" },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ka-zu-ma.com/img/ogp.png",
      },
      { hid: "og:site_name", property: "og:site_name", content: SITE_TITLE },
      {
        hid: "og:description",
        property: "og:description",
        content: "Kazuma Saitoのポートフォリオサイト",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", property: "twitter:site", content: "@ka3zu1ma10" },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  loading: { color: "#fff" },
  css: [
    { src: "~/node_modules/highlight.js/styles/hopscotch.css", lang: "css" },
  ],
  plugins: [
    { src: "@/plugins/Lightbox.js" },
    { src: "@/plugins/routerOptions.js", ssr: false },
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    "@nuxtjs/style-resources",
    "@/modules/ogpGenerator",
  ],
  styleResources: {
    scss: [
      "~/assets/sass/variable/_index.scss",
      "~/assets/sass/mixin/_index.scss",
    ],
  },
  markdownit: {
    preset: "default",
    injected: true,
    breaks: true,
    html: true,
  },
  // generate: {
  //   routes: [generateDynamicRoutes, generaterOGP],
  //   fallback: true,
  // },
  // sitemap: {
  //   path: "/sitemap.xml",
  //   hostname: "https://ka-zu-ma.com/",
  //   exclude: ["/about"],
  //   routes: generateDynamicRoutes,
  // },
  build: {
    // extend(config, ctx) {},
  },
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-167574769-1",
      },
    ],
  ],
}
