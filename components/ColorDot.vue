<script setup>
const { color, width, height } = defineProps({
  color: {
    type: String,
    default: "#4CAF50",
  },
  width: {
    type: String,
    default: "10px",
  },
  height: {
    type: String,
    default: "10px",
  },
});
</script>

<template>
  <div
    class="custom-dot"
    :style="`background: ${color}; width: ${width}; height: ${height};`"
  ></div>
</template>

<style lang="sass" scoped>
.custom-dot
    border-radius: 100%
</style>
