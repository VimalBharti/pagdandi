// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase", "nuxt-icons"],
  supabase: {
    redirect: false,
  },
  ssr: false
})