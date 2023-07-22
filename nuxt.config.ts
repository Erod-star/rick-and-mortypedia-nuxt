// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
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
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
        },
      ],
    },
  },
});
