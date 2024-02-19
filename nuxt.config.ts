// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    "~/assets/styles/main.scss"
  ],
  app: {
    baseURL: '/nuxt-demo-routing/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: false }
})
