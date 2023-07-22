<template>
  <div class="mt-7 max-w-sm mx-auto my-12 text-center text-black card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <v-btn class="btn my-7" @click="handleClickError">Go Home...</v-btn>
  </div>
</template>

<script setup>
const { error } = defineProps({
  error: Object,
});
// defineProps(["error"]);

const handleClickError = () => clearError({ redirect: "/" });
</script>

<style lang="sass">
body
  background: #151515
  color: white
</style>
