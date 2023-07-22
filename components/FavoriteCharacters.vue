<template>
  <div>
    <p class="mb-10">Favorite characters:</p>

    <div class="favorite__characters grid grid-cols-5 gap-5 max-w-sm">
      <v-avatar
        v-for="character in characters"
        :key="character.id"
        class="character__avatar"
        :image="character.image"
        size="x-large"
        @click="push(`characters/${character.id}`)"
      />
    </div>
  </div>
</template>

<script setup>
const { characters } = defineProps({
  characters: Array,
});

const { push } = useRouter();
</script>

<style lang="sass" scoped>
.favorite__characters
    max-height: 135px
    overflow-y: auto
.character__avatar
    &:hover
        cursor: pointer
</style>
