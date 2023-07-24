<script setup>
import { useMainStore } from "@/stores/mainStore";
useHead({
  title: `Rick and Mortypedia | Locations`,
  meta: [
    {
      name: `Rick and Mortypedia locations page`,
      content: `Locations of Rick and Mortypedia`,
    },
  ],
});

definePageMeta({
  middleware: ["auth"],
});

const { locations } = useMainStore();
</script>

<template>
  <div class="px-20 pb-10">
    <h1 class="text-5xl mt-6 mb-8">Locations</h1>
    <div class="locations_page_container flex justify-center">
      <v-img
        class="locations__image_container mr-20"
        height="500"
        max-width="500"
        src="/images/jerry-landing.png"
        alt="Jerry God Smith"
      />
      <div class="locations__container">
        <div class="mb-8" v-for="location in locations" :key="location.id">
          <NuxtLink
            class="location_link text-2xl"
            :to="`/locations/${location.id}`"
          >
            {{ location.name }}
          </NuxtLink>
          <p class="text-gray-400">
            <i> {{ location.type }} </i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.locations__image_container,
.locations__container
  height: 500px
  width:  500px

.locations__container
  overflow-y: auto

.location_link
  cursor: pointer
  transition: all 300ms ease
  &:hover
    color: rgb(134 239 172 / 1)
    font-size: 30px
    line-height: 36px
</style>
