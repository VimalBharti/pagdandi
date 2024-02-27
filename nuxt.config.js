// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "nuxt-icon",
    "dayjs-nuxt",
  ],
  supabase: {
    redirect: false,
  },
  ssr: false,
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})