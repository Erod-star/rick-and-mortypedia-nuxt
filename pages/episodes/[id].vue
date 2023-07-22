<template>
  <div>
    <h1>This is the episode: {{ params.id }}</h1>
  </div>
</template>

<script setup>
const { params } = useRoute();
</script>

<style scoped></style>
