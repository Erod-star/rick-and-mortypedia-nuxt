import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    title: "Welcome Stranger",
    characters: [],
    locations: [],
    episodes: [],
  }),
  actions: {
    async getCharacters() {
      const data = await $fetch("https://rickandmortyapi.com/api/character");
      this.characters = data.results;
    },
    storeCharacter(character) {
      this.characters.push(character);
    },
  },
});
