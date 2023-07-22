<template>
  <div>
    <div v-if="!character" class="character__loader">
      <v-progress-circular indeterminate color="grey-lighten-4" />
    </div>

    <div v-else class="character flex justify-between p-24">
      <v-img
        class="character__img"
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
        <p>{{ character.name }}</p>
        <span>{{ character.species }}</span>
        <p>{{ character.status }}</p>
        <p>{{ character.gender }}</p>
        <p>{{ character.origin.namne }}</p>
        <p>{{ character.created }}</p>
        <p>{{ character.location.name }}</p>
        <hr />
        <h2>Appereances</h2>
        <!-- <p v-for="episode in character.episode" key="episode">{{ episode }}</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { params } = useRoute();

const characterId = params.id;
const { data: character } = await useFetch(`/api/characters/${characterId}`);
// const { data } = await useFetch(`/api/characters/${characterId}`);

const oUser = ref({ firstName: "Edson" });
</script>

<style scoped></style>
