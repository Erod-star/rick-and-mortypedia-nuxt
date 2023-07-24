<script setup>
const { error } = defineProps({
  error: Object,
});

const handleClickError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error_container flex justify-center align-center">
    <div class="error_card max-w-sm text-center text-black card relative">
      <img
        class="site-logo w-24 h-24"
        src="/images/page-icon.png"
        alt="page icon"
      />
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{ error.message }}</p>
      <v-btn class="btn my-7" color="green-lighten-1" @click="handleClickError">
        Go Home...
      </v-btn>
    </div>
  </div>
</template>

<style lang="sass">
body
  background: #151515
  color: white
.error_container
  height: 100vh
  .error_card
    height: 350px
    width: 350px
  .site-logo
    position: absolute
    left: calc(50% - 48px)
    top: -65px
</style>
