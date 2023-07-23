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
    async getEpisodes() {
      const data = await $fetch("https://rickandmortyapi.com/api/episode");
      this.episodes = data.results;
    },
    async getLocations() {
      const data = await $fetch("https://rickandmortyapi.com/api/location");
      this.locations = data.results;
    },
    storeCharacter(character) {
      this.characters.push(character);
    },
  },
});
