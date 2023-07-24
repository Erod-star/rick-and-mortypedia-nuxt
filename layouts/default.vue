<template>
  <div id="app">
    <header
      class="shadow-sm h-20 bg-gradient-to-r from-black via-green-500 via-emeral-700 to-black text-white"
    >
      <!-- class="shadow-sm h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" -->
      <nav class="h-full container px-4 flex justify-between align-center">
        <div>
          <NuxtLink to="/" class="flex align-center font-bold">
            <img
              class="w-20 h-20 mr-2"
              src="/images/page-icon.png"
              alt="page icon"
            />
            <p>Rick and Mortypedia</p>
          </NuxtLink>
        </div>
        <ul class="flex gap-4">
          <li><NuxtLink to="/characters">Characters </NuxtLink></li>
          <li><NuxtLink to="/episodes">Episodes</NuxtLink></li>
          <li><NuxtLink to="/locations">Locations</NuxtLink></li>
          <li><NuxtLink to="/profile">Profile</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";

const {
  characters,
  episodes,
  locations,
  getCharacters,
  getEpisodes,
  getLocations,
} = useMainStore();
onMounted(() => {
  if (!characters.length) getCharacters();
  if (!episodes.length) getEpisodes();
  if (!locations.length) getLocations();
});

watch(characters, () => {
  if (characters.length === 0) getCharacters();
});
</script>

<style lang="sass">
body
  background: #151515
  color: white

.router-link-exact-active,
.router-link-active
  color: #FFEA00

::-webkit-scrollbar
  width: 0.7em

::-webkit-scrollbar-track
  background: transparent
  border-radius: 100vh
  margin-block: 0.5em

::-webkit-scrollbar-thumb
  background: #4CAF50
  border-radius: 100vh

::-webkit-scrollbar-thumb:hover
  background: darken($color: #4CAF50, $amount: 10)
</style>
