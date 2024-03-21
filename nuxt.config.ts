// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/vello.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  colorMode: {
    preference: "light",
  },
});
