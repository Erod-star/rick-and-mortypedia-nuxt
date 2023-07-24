<script setup>
useHead({
  title: `Rick and Mortypedia | Login`,
  meta: [
    {
      name: `Rick and Mortypedia login page`,
      content: `Login to Rick and Mortypedia`,
    },
  ],
});

definePageMeta({
  layout: "login",
});

const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref("");

const signIn = async () => {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/");
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>

<template>
  <div class="login flex">
    <div class="glass_container"></div>
    <div class="login_card_container">
      <div class="login_card mt-7 text-center text-white card-dark mr-20">
        <img
          class="site-logo w-24 h-24"
          src="/images/page-icon.png"
          alt="page icon"
        />
        <h3 class="mt-7 text-3xl bg-green-800 font-bold mx-10 py-4 rounded-md">
          <i> Rick and Mortypedia </i>
        </h3>
        <h3 class="mt-7 text-2xl font-bold">Login</h3>

        <form @submit.prevent class="mt-8">
          <v-text-field
            class="px-6"
            label="Email"
            placeholder="example@wuabalubadubdb.com"
            bg-color="grey-darken-4"
            variant="solo"
            type="email"
            v-model="email"
          />
          <v-text-field
            class="px-6"
            label="Password"
            placeholder="*******"
            bg-color="grey-darken-4"
            variant="solo"
            type="password"
            v-model="password"
          />
          <p v-if="errorMsg" class="error_msg text-red-500">
            {{ errorMsg }}
          </p>
          <v-btn
            class="mt-10"
            color="green-lighten-1"
            variant="tonal"
            type="submit"
            @click="signIn"
          >
            Login
          </v-btn>
          <p class="mt-4">You don't have an account?</p>
          <NuxtLink to="/register" class="text-blue pointer">
            Register
          </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.login
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  &_background
    max-height: calc(100vh - 80px)
    opacity: 0.8
  .glass_container
    position: absolute
    border: 1px solid rgba(255, 255, 255, 0.3)
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
    background: rgba(255, 255, 255, 0.2)
    backdrop-filter: blur(5px)
    -webkit-backdrop-filter: blur(5px)
    height: 100%
    width: 100%
  &_card_container
    position: absolute
    display: flex
    justify-content: center
    height: 500px
    width: 500px
  .login_card
    width: 500px
    height: 520px
    background: #151515
    z-index: 10
  .error_msg
    position: absolute
    left: 40px
  .site-logo
    position: absolute
    left: calc(50% - 85px)
    top: -25px
</style>
