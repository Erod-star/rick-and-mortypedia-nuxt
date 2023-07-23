<template>
  <div>
    <div v-if="!character" class="character__loader">
      <v-progress-circular indeterminate color="grey-lighten-4" />
    </div>

    <div v-else class="character flex flex-col p-20">
      <h1 class="text-5xl mb-14 text-center">{{ character.name }}</h1>

      <div class="flex justify-center">
        <v-img
          class="character__img mr-20 rounded-md"
          :src="character.image"
          height="300"
          max-width="300"
          src="https://bad.src/not/valid"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate />
            </div>
          </template>
        </v-img>

        <div class="character__description">
          <p class="mb-2 text-green-300">
            Name: <i class="text-white">{{ character.name }}</i>
          </p>
          <p class="mb-2 text-green-300">
            Species: <i class="text-white">{{ character.species }}</i>
          </p>
          <p class="mb-2 text-green-300">
            Status: <i class="text-white">{{ character.status }}</i>
          </p>
          <p class="mb-2 text-green-300">
            Gender: <i class="text-white">{{ character.gender }}</i>
          </p>
          <p class="mb-2 text-green-300">
            Origin: <i class="text-white">{{ character.origin.name }}</i>
          </p>
          <p class="mb-2 text-green-300">
            Last appereance: <i class="text-white">{{ character.created }}</i>
          </p>
          <p class="mb-4 text-green-300">
            Current loction:
            <i class="text-white">{{ character.location.name }}</i>
          </p>

          <hr />

          <h2 class="mt-6 mb-2">Appereances</h2>
          <v-sheet class="mx-auto" max-width="500" rounded color="#151515">
            <v-slide-group show-arrows>
              <template #prev>
                <i class="material-icons-outlined text-white">
                  arrow_back_ios
                </i>
              </template>
              <template #next>
                <i class="material-icons-outlined text-white">
                  arrow_forward_ios
                </i>
              </template>
              <v-slide-group-item
                v-for="episode in prasedEpisodes"
                :key="episode"
                v-slot="{ isSelected }"
              >
                <v-btn
                  class="ma-2"
                  color="rgb(134 239 172 / 1)"
                  rounded
                  :color="isSelected ? 'primary' : undefined"
                  @click="router.push(`/episodes/${episode}`)"
                >
                  Episode {{ episode }}
                </v-btn>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>

          <v-btn
            class="mt-6"
            variant="tonal"
            color="lime-lighten-2"
            @click="addToFavoriteCharacter(character)"
          >
            Add to favorites!
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";

const { params } = useRoute();
const { addToFavoriteCharacter } = useUserStore();
const router = useRouter();
const prasedEpisodes = ref([]);

const setEpisodes = (episodes = []) => {
  const newEpisodes = episodes.map((episode) => {
    const episodeId = episode.split("/")[episode.split("/").length - 1];
    return episodeId;
  });
  prasedEpisodes.value = newEpisodes;
};

const characterId = params.id;
const uri = `https://rickandmortyapi.com/api/character/${characterId}`;
const { data: character } = await useFetch(uri);

if (!character.value) {
  throw createError({ statusCode: 404, statusMessage: "Character not found" });
}

useHead({
  title: `Rick and Mortypedia | ${character.value.name}`,
  meta: [{ name: "description of", content: "Nuxt 3 Merch" }],
});
setEpisodes(character.value.episode);

// ? Handler to require a data from a completed endopoint responde
// watch(
//   character,
//   (newCharacter) => {
//     setEpisodes(newCharacter.episode);
//   },
//   {
//     deep: true,
//     immediate: true,
//   }
// );
</script>

<style scoped></style>
