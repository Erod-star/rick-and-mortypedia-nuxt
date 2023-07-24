<script setup>
useHead({
  title: `Rick and Mortypedia`,
  meta: [
    {
      name: `Rick and Mortypedia home page`,
      content: `Home of the Rick and Mortypedia website`,
    },
  ],
});

definePageMeta({
  middleware: ["auth"],
});

const { push } = useRouter();
</script>

<template>
  <div class="homepage flex">
    <v-img
      class="homepage_background"
      src="https://wallpapers.com/images/featured/rick-and-morty-pc-4k-ks9x4010rl0fycrb.jpg"
      alt="home page thumb"
      cover
    >
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate />
        </div>
      </template>
    </v-img>

    <div class="glass_container"></div>

    <div class="homepage_card_container">
      <div class="homepage_card mt-7 text-center text-white card-dark mr-20">
        <h3 class="mt-7 text-2xl font-bold">
          Welcome to the "Rick and Mortypedia!"
        </h3>
        <p class="mt-7">
          This is a custom project to practice with the Nuxt 3 technology, but
          is also good if your looking out for some Rick and Morty info
        </p>
        <div class="flex justify-center mt-4">
          <img
            class="w-50 h-45 mr-2"
            src="/images/page-icon.png"
            alt="page icon"
          />
        </div>
        <v-btn class="mt-7" variant="outlined" @click="push('/characters')">
          See some wuabalubadubdub characters
        </v-btn>
      </div>
      <div
        class="homepage_card_images_container mt-7 flex justify-center align-center"
      >
        <img
          class="hompage_card_image rick-image"
          src="/images/rick-landing.png"
          alt="episodes thumb"
        />
        <img
          class="hompage_card_image morty-image"
          src="/images/morty-landing.png"
          alt="episodes thumb"
        />
        <img
          class="hompage_card_image jerry-image"
          src="/images/jerry-landing.png"
          alt="episodes thumb"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.homepage
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: calc(100vh - 80px)
  &_background
    max-height: calc(100vh - 80px)
    opacity: 0.8
  .glass_container
    position: absolute
    border: 1px solid rgba(255, 255, 255, 0.3)
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
    background: rgba(255, 255, 255, 0.2)
    backdrop-filter: blur(5px)
    -webkit-backdrop-filter: blur(5px)
    height: 100%
    width: 100%
  &_card_container
    position: absolute
    display: flex
    justify-content: center
    height: 500px
    width: 500px
  .homepage_card
    background: #151515
    z-index: 10
  .homepage_card_images_container
    position: relative
    height: 400px
    min-width: 400px
  .hompage_card_image
    position: absolute
  .morty-image
    z-index: 1
    left: 0px
    bottom: 20px
    width: 200px
    height: 300px
  .rick-image
    z-index: 10
    left: 90px
  .jerry-image
    width: 200px
    height: 400px
</style>
