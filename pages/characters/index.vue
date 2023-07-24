<script setup>
import { useMainStore } from "@/stores/mainStore";
useHead({
  title: `Rick and Mortypedia | Characters`,
  meta: [
    {
      name: `Rick and Mortypedia characters page`,
      content: `Characters of Rick and Morty`,
    },
  ],
});

definePageMeta({
  middleware: ["auth"],
});

const { characters } = useMainStore();
</script>

<template>
  <div class="px-20 pb-10">
    <h1 class="text-5xl mt-6 mb-8">All characters</h1>
    <hr class="mb-10" />
    <div class="grid grid-cols-5 gap-5">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped></style>
