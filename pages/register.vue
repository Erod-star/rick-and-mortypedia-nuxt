<script setup>
definePageMeta({
  layout: "login",
});

const email = ref("");
const password = ref(null);
const client = useSupabaseAuthClient();
const successMsg = ref("");
const errorMsg = ref("");

const signUp = async () => {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account";
  } catch (error) {
    errorMsg.value = error.message;
  }
};

const consoleLog = () => {
  console.log(email.value);
  console.log(password.value);
};
</script>

<template>
  <div class="homepage flex">
    <div class="glass_container"></div>

    <div class="homepage_card_container">
      <div class="homepage_card mt-7 text-center text-white card-dark mr-20">
        <h3 class="mt-7 text-3xl bg-yellow font-bold mx-10 py-4 rounded-md">
          <i> Rick and Mortypedia </i>
        </h3>
        <h3 class="mt-7 text-2xl font-bold">Register</h3>

        <form @submit.prevent action="" class="mt-8">
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
          <p
            class="error_msg"
            :class="`${successMsg ? 'text-green-500' : 'text-red-500'}`"
          >
            {{ successMsg ? successMsg : errorMsg }}
          </p>
          <v-btn
            class="mt-10"
            color="yellow-lighten-1"
            variant="tonal"
            @click="signUp"
          >
            Register
          </v-btn>
          <p class="mt-4">You have an account?</p>
          <NuxtLink to="/login" class="text-blue pointer"> Login </NuxtLink>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.homepage
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
  .homepage_card
    width: 500px
    height: 520px
    background: #151515
    z-index: 10
  .error_msg
    position: absolute
    left: 40px
</style>
