<template>
  <div>
    <p class="mb-10">Favorite {{ title }}:</p>

    <div class="favorite__characters grid grid-cols-5 gap-5 max-w-sm">
      <v-avatar
        v-for="item in items"
        :key="item.id"
        class="character__avatar"
        :image="item.image"
        size="x-large"
        @click="push(`${path}/${item.id}`)"
      />
    </div>
  </div>
</template>

<script setup>
const { title, items } = defineProps({
  title: {
    type: String,
    default: "No title",
  },
  items: Array,
  path: {
    type: String,
    default: "characters",
  },
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
