<template>
  <v-card class="mx-auto" min-width="250" max-width="250">
    <v-img :src="character.image" :alt="character.name" height="250px" cover />

    <v-card-title class="font-bold text-black-500">
      {{ character.name }}
    </v-card-title>

    <v-card-subtitle> {{ character.status }} </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        aria-label="See more"
        @click="push(`/characters/${character.id}`)"
      >
        See more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const { push } = useRouter();
const { character } = defineProps({
  character: Object,
});
</script>

<style scoped></style>
