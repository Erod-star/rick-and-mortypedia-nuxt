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
      console.log(this.episodes);
    },
    storeCharacter(character) {
      this.characters.push(character);
    },
  },
});
