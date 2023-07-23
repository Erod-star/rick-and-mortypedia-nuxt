import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "Edson",
    lastName: "Rodriguez",
    favoriteCharacters: [],
    favoriteEpisodes: [],
  }),
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    favCharacters() {
      return this.favoriteCharacters;
    },
  },
  actions: {
    onLogin() {
      console.log(`Welcome `);
    },
    addToFavoriteCharacter(character) {
      const isOnFavorites = this.favoriteCharacters.find(
        (c) => c.id === character.id
      );

      if (!isOnFavorites) this.favoriteCharacters.push(character);
    },
    addToFavoriteEpisodes(episode) {
      const isOnFavorites = this.favoriteEpisodes.find(
        (e) => e.id === episode.id
      );

      if (!isOnFavorites) this.favoriteEpisodes.push(episode);
    },
    deleteFromFavoriteCharacters(character) {
      this.favoriteCharacters = this.favoriteCharacters.filter(
        (c) => c.id !== character.id
      );
    },
  },
});
