<script setup>
useHead({
  title: `Rick and Mortypedia | Secret`,
  meta: [
    {
      name: `Rick and Morty secret page`,
      content: `value info about the secrets of the page`,
    },
  ],
});

definePageMeta({
  layout: "login",
});

const router = useRouter();
</script>

<template>
  <div class="secret_container flex justify-center align-center">
    <div
      class="secret-card max-w-sm text-center text-black card relative flex align-center flex-column px-10"
    >
      <img
        class="site-logo w-24 h-24"
        src="/images/page-icon.png"
        alt="page icon"
      />
      <h1 class="mt-7 text-3xl font-bold">
        Congratulations, you found the secret!!
      </h1>
      <img
        class="rounded mt-4"
        src="https://media.tenor.com/E6wUU1mE-pcAAAAM/rick-and-morty-schwifty.gif"
        alt="Secret founded"
      />

      <a
        class="secret-link mt-4"
        href="https://github.com/Erod-star/rick-and-mortypedia-nuxt"
        target="_blank"
      >
        See the app repo
      </a>

      <a
        class="secret-link mt-4"
        href="https://www.linkedin.com/in/edson-r-govea/"
        target="_blank"
      >
        Go to my Linkedin
      </a>

      <v-btn class="btn my-7" color="green-lighten-1" @click="router.push('/')">
        Return to the application
      </v-btn>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.secret_container
  height: 100vh
.secret-card
  height: 520px
  width: 100%
.site-logo
  position: absolute
  left: calc(50% - 48px)
  top: -65px
.secret-link
  color: #2196F3
  transition: all 300ms ease
  &:hover
    color: rgb(22 101 52 / 1)
</style>
