// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  app: {
    head: {
      title: "Rick and Morty world!",
      meta: [
        {
          name: "description",
          content: "Everything about Rick and Morty using Nuxt 3!",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/page-icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=VT323",
        },
      ],
    },
  },
  runtimeConfig: {
    giphyKey: process.env.GIPHY_API_KEY,
  },
});
