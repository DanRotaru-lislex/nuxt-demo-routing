// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    "~/assets/styles/main.scss"
  ],
  app: {
    baseURL: '/nuxt-github-pages/',
    buildAssetsDir: 'assets'
  },
  router: {
    options: {
      hashMode: true
    }
  },
  devtools: { enabled: false }
})
