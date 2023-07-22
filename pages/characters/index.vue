<template>
  <div>
    <h1>Characters</h1>
    <div class="grid grid-cols-4 gap-5">
      <CharacterCard
        v-for="character in mainStore.characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "../../stores/mainStore";

const mainStore = useMainStore();
</script>

<style scoped></style>
