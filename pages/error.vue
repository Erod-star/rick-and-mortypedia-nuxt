<template>
  <div>
    <h1>{{ error.query }}</h1>
  </div>
</template>

<script setup>
const { error } = defineProps({
  error: Object,
});
</script>

<style scoped></style>
