<template>
  <div id="app">
    <header
      class="shadow-sm h-20 bg-gradient-to-r from-black via-green-500 via-emeral-700 to-black text-white"
    >
      <!-- class="shadow-sm h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" -->
      <nav class="h-full container px-4 flex justify-between align-center">
        <div class="flex align-center">
          <img
            class="w-20 h-20 mr-2"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4df52d8f-ce0b-470c-b885-65acf2b8c893/deohofo-655ec932-bfd9-436a-be00-f6eb0cf4c7d2.png/v1/fill/w_685,h_747/rick_and_morty_png_by_irfan221_deohofo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ3IiwicGF0aCI6IlwvZlwvNGRmNTJkOGYtY2UwYi00NzBjLWI4ODUtNjVhY2YyYjhjODkzXC9kZW9ob2ZvLTY1NWVjOTMyLWJmZDktNDM2YS1iZTAwLWY2ZWIwY2Y0YzdkMi5wbmciLCJ3aWR0aCI6Ijw9Njg1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xXt6isGjo1MBRj3u4-d27ag8kTWSKI2-lySmm2K_caA"
            alt="page icon"
          />
          <NuxtLink to="/" class="font-bold"> Rick and Mortypedia</NuxtLink>
        </div>
        <ul class="flex gap-4">
          <li><NuxtLink to="/characters">Characters </NuxtLink></li>
          <li><NuxtLink to="/locations">Locations</NuxtLink></li>
          <li><NuxtLink to="/episodes">Episodes</NuxtLink></li>
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

const { characters, episodes, getCharacters, getEpisodes } = useMainStore();
onMounted(() => {
  if (!characters.length) getCharacters();
  if (!episodes.length) getEpisodes();
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
  // font-weight: bold
</style>
