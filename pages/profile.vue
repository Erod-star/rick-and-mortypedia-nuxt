<template>
  <div>
    <div class="flex mt-10 px-12 align-center justify-between">
      <h1>{{ fullName }}</h1>
      <v-btn class="ma-2" rounded @click="addToFavoriteCharacter(character)">
        <i class="material-icons-outlined"> edit </i>
      </v-btn>
    </div>

    <div class="flex justify-center p-20 px-12">
      <v-img
        height="300"
        max-width="300"
        alt="user thumb"
        src="https://fondosmil.com/fondo/52339.jpg"
      />

      <div class="profile__favorites">
        <FavoritesViewer
          title="characters"
          :items="favoriteCharacters"
          path="characters"
        />
        <hr />
        <FavoritesViewer
          title="episodes"
          :items="favoriteEpisodes"
          path="episodes"
        />
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";

const { fullName, favoriteCharacters, favoriteEpisodes } = useUserStore();
</script>

<style lang="sass" scoped>
.card
  color: rgb(134 239 172 / 1)
</style>
