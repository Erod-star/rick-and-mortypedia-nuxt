import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    favoriteCharacters: [],
    favoriteEpisodes: [],
    favoriteLocations: [],
  }),
  actions: {
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
    addToFavoriteLocations(location) {
      const isOnFavorites = this.favoriteLocations.find(
        (l) => l.id === location.id
      );

      if (!isOnFavorites) this.favoriteLocations.push(location);
    },
    deleteFromFavoriteCharacters(character) {
      this.favoriteCharacters = this.favoriteCharacters.filter(
        (c) => c.id !== character.id
      );
    },
  },
});
