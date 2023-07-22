import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "Edson",
    lastName: "Rodriguez",
    favoriteCharacters: [],
  }),
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
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
  },
});
