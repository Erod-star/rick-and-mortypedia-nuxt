<template>
  <div class="px-20 pb-10">
    <h1 class="text-5xl mt-6 mb-8">Episodes</h1>
    <div class="episodes_page_container flex justify-center">
      <v-img
        class="episodes__image_container mr-20"
        height="500"
        max-width="500"
        src="/images/rick-landing.png"
        alt="episodes thumb"
      />
      <div class="episodes__container">
        <div class="mb-8" v-for="episode in episodes" :key="episode.id">
          <NuxtLink
            class="episode_link text-2xl"
            :to="`/episodes/${episode.id}`"
          >
            {{ `${episode.episode} - ${episode.name}` }}
          </NuxtLink>
          <p class="text-gray-400">
            <i> {{ episode.air_date }} </i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";

const { episodes } = useMainStore();
</script>

<style lang="sass" scoped>
.episodes__image_container,
.episodes__container
  height: 500px
  width:  500px

.episodes__container
  overflow-y: auto

.episode_link
  cursor: pointer
  transition: all 300ms ease
  &:hover
    color: rgb(134 239 172 / 1)
    font-size: 30px
    line-height: 36px
</style>
