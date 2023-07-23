<template>
  <Loader v-if="!episode" />
  <div v-else class="mt-6 px-12">
    <h1 class="text-4xl">Episode #{{ episodeId }}: {{ episode.name }}</h1>

    <div v-if="gifs.length > 0" class="flex justify-center mb-10 mt-6">
      <v-img
        v-for="(gif, i) in gifs"
        class="mr-12"
        height="300"
        max-width="300"
        alt="user photo"
        :src="gif.images.original.url"
        :alt="`Episode ${i} overview`"
      />
    </div>

    <div class="flex justify-center">
      <div class="episode__details mr-16">
        <h3 class="text-2xl mb-4">Details</h3>
        <p class="mb-2 text-green-300">
          Air date: <i class="text-white">{{ episode.air_date }}</i>
        </p>
        <p class="mb-2 text-green-300">
          Created: <i class="text-white">{{ episode.created }}</i>
        </p>
        <p class="mb-2 text-green-300">
          Season: <i class="text-white">{{ episode.episode }}</i>
        </p>
        <v-btn
          variant="tonal"
          color="lime-lighten-2"
          @click="
            addToFavoriteEpisodes({
              id: episode.id,
              image: gifs[1].images.original.url,
              name: episode.name,
            })
          "
        >
          Add to favorites!
        </v-btn>
      </div>

      <div class="episode__characters">
        <h3 class="text-2xl mb-4">Characters</h3>
        <div
          class="episode__characters_buttons-container grid grid-cols-5 gap-3"
        >
          <v-btn
            v-for="id in charactersIds"
            color="rgb(134 239 172 / 1)"
            @click="router.push(`/characters/${id}`)"
          >
            {{ id }}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";

const { addToFavoriteEpisodes } = useUserStore();
const { params } = useRoute();
const router = useRouter();
const episodeId = params.id;

const { data: episode } = await useFetch(
  `https://rickandmortyapi.com/api/episode/${episodeId}`
);

if (!episode.value) {
  throw createError({ statusCode: 404, message: "Episode not founded :(" });
}

const { data: gifs } = await useFetch(
  `/api/episodes/${episodeId}?title=${episode.value.name}`,
  {
    method: "get",
  }
);

const charactersIds = computed(() => {
  let characters = [];
  characters = episode.value.characters.map((c) => {
    const split = c.split("/");
    return split[split.length - 1];
  });
  return characters;
});

// console.log(gifs.value);
</script>

<style scoped lang="sass">
.episode
  &__characters
    &_buttons-container
      max-height: 135px
      overflow-y: auto
      overflow-x: hidden
</style>
