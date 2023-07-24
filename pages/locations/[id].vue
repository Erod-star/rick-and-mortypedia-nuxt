<template>
  <Loader v-if="!location" />
  <div v-else class="mt-6 px-12">
    <h1 class="text-4xl">{{ location.name }}</h1>
    <div v-if="gifs.length > 0" class="flex justify-center mb-10 mt-6">
      <v-img
        v-for="(gif, i) in gifs"
        class="mr-12"
        height="300"
        max-width="300"
        :src="gif.images.original.url"
        :alt="location.name"
      />
    </div>

    <div class="flex justify-center">
      <div class="location__details mr-16">
        <h3 class="text-2xl mb-4">Details</h3>
        <p class="mb-2 text-green-300">
          Name: <i class="text-white">{{ location.name }}</i>
        </p>
        <p class="mb-2 text-green-300">
          Type: <i class="text-white">{{ location.type }}</i>
        </p>
        <p class="mb-2 text-green-300">
          Dimension: <i class="text-white">{{ location.dimension }}</i>
        </p>
        <p class="mb-2 text-green-300">
          Created: <i class="text-white">{{ location.created }}</i>
        </p>
        <v-btn
          variant="outlined"
          :color="isOnFavorites(location.id) ? 'green' : 'lime-lighten-2'"
          @click="
            addToFavoriteLocations({
              id: location.id,
              image: gifs[1].images.original.url,
              name: location.name,
            })
          "
        >
          {{ isOnFavorites(location.id) ? "On favorites" : "Add to favorites" }}
        </v-btn>
      </div>

      <div class="location__residents">
        <h3 class="text-2xl mb-4">Residents</h3>
        <div
          class="location__residents_buttons_container grid grid-cols-5 gap-3"
        >
          <v-btn
            v-for="id in charactersIds"
            :key="id"
            class="mr-3"
            color="rgb(134 239 172 / 1)"
            variant="outlined"
            rounded
            @click="push(`/characters/${id}`)"
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

const { params } = useRoute();
const { push } = useRouter();
const { addToFavoriteLocations, favoriteLocations } = useUserStore();
const locationId = params.id;

const { data: location } = await useFetch(
  `https://rickandmortyapi.com/api/location/${locationId}`
);

if (!location.value) {
  throw createError({
    statusCode: 404,
    message: "This location does not exist",
  });
}

const { data: gifs } = await useFetch(
  `/api/episodes/${locationId}?title=${location.value.name}`
);

const charactersIds = computed(() => {
  let characters = [];
  characters = location.value.residents.map((c) => {
    const split = c.split("/");
    return split[split.length - 1];
  });
  return characters;
});

const isOnFavorites = (id) => {
  const existOnFavorites = favoriteLocations.find(
    (location) => location.id === id
  );
  return existOnFavorites;
};
</script>

<style scoped lang="sass">
.location
  &__residents
    &_buttons_container
      max-height: 135px
      overflow-y: auto
      overflow-x: hidden
</style>
