<template>
  <v-card class="mx-auto" min-width="250" max-width="250" color="grey-darken-4">
    <v-img :src="character.image" :alt="character.name" height="250px" cover />

    <v-card-title>
      <template #default>
        <p class="font-bold">{{ character.name }}</p>
      </template>
    </v-card-title>

    <v-card-subtitle>
      <template #default>
        <div class="flex align-center mb-2">
          <ColorDot class="mr-2" :color="setStatus(character.status)" />
          <p>{{ character.status }}</p>
        </div>
      </template>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="rgb(134 239 172 / 1)"
        variant="outlined"
        aria-label="See more"
        @click="push(`/characters/${character.id}`)"
      >
        See more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const { character } = defineProps({
  character: Object,
});

const { push } = useRouter();

const setStatus = (status) => {
  switch (status) {
    case "Alive":
      return "#4CAF50";
    case "Dead":
      return "#C62828";
    case "unknown":
      return "#B0BEC5";
    default:
      return "#4CAF50";
  }
};
</script>

<style scoped></style>
