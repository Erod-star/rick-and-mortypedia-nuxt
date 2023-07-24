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

<template>
  <div
    v-if="items.length === 0"
    class="favorites_empty flex justify-center align-center"
  >
    <slot name="empty" />
  </div>
  <div v-else>
    <h3 class="mb-4 text-xl text-center">{{ title }}</h3>

    <v-sheet class="mx-auto" max-width="500" rounded color="#151515">
      <v-slide-group show-arrows>
        <template #prev>
          <i class="material-icons-outlined text-white"> arrow_back_ios </i>
        </template>
        <template #next>
          <i class="material-icons-outlined text-white"> arrow_forward_ios </i>
        </template>
        <v-slide-group-item v-for="item in items" :key="item.id">
          <v-btn
            class="rounded-full"
            variant="text"
            @click="push(`${path}/${item.id}`)"
          >
            <v-avatar
              class="character__avatar avatar-btn"
              :image="item.image"
              size="x-large"
            />
            <v-tooltip activator="parent" location="bottom">
              {{ item.name }}
            </v-tooltip>
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<style lang="sass" scoped>
.v-btn
  display: flex
  align-items: center
  height: 56px
  width: 56px
.favorites_empty
    min-height: 100px
.character__avatar
  &:hover
      cursor: pointer
</style>
