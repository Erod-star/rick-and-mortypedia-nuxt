<template>
  <div class="flex">
    <div class="a">
      <h1>Welcome to the best Rick and Morty wiki!</h1>

      <span>
        This is a custom project to practice with the Nuxt 3 technology, but is
        also good if your looking out for some Rick and Morty info
      </span>

      <v-btn variant="outlined" @click="push('/characters')">
        See some wuabalubadubdub characters
      </v-btn>
    </div>

    <div>
      <v-img
        width="250px"
        height="300px"
        src="https://fondosmil.com/fondo/52339.jpg"
        alt="home page thumb"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate />
          </div>
        </template>
      </v-img>
    </div>
  </div>
</template>

<script setup>
const { push } = useRouter();
</script>

<style scoped></style>
