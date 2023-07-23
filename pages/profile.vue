<template>
  <div>
    <div class="flex mt-12 px-20 align-center justify-between">
      <h1 class="text-4xl">{{ fullName }}</h1>
      <v-btn class="ma-2" rounded @click="onEditInfo()">
        <i class="material-icons-outlined"> edit </i>
      </v-btn>
    </div>

    <div class="flex justify-center align-center p-6 px-12 h-full">
      <div class="align-center profile__image_container">
        <v-img
          class="border-2 border-stone-600 border-white rounded-full mr-20"
          height="300"
          max-width="300"
          alt="user thumb"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4df52d8f-ce0b-470c-b885-65acf2b8c893/deohofo-655ec932-bfd9-436a-be00-f6eb0cf4c7d2.png/v1/fill/w_685,h_747/rick_and_morty_png_by_irfan221_deohofo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ3IiwicGF0aCI6IlwvZlwvNGRmNTJkOGYtY2UwYi00NzBjLWI4ODUtNjVhY2YyYjhjODkzXC9kZW9ob2ZvLTY1NWVjOTMyLWJmZDktNDM2YS1iZTAwLWY2ZWIwY2Y0YzdkMi5wbmciLCJ3aWR0aCI6Ijw9Njg1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xXt6isGjo1MBRj3u4-d27ag8kTWSKI2-lySmm2K_caA"
        />
        <v-btn rounded class="profile__image_change_photo">
          <v-tooltip activator="parent" location="bottom">
            Upload/Change picture
          </v-tooltip>
          <i class="material-icons-outlined"> photo_camera </i>
        </v-btn>
      </div>

      <div class="profile__favorites">
        <FavoritesViewer
          class="mb-8"
          title="Favorite characters"
          :items="favoriteCharacters"
          path="characters"
        >
          <template #empty>
            <h3 class="mb-4 text-xl">
              <p>No favorite characters founded</p>
              <v-btn
                variant="outlined"
                class="mt-4"
                @click="push('/characters')"
              >
                Go to characters</v-btn
              >
            </h3>
          </template>
        </FavoritesViewer>
        <FavoritesViewer
          class="mb-8"
          title="Favorite episodes"
          :items="favoriteEpisodes"
          path="episodes"
        >
          <template #empty>
            <h3 class="mb-4 text-xl">
              <p>No favorite episodes founded</p>
              <v-btn variant="outlined" class="mt-4" @click="push('/episodes')">
                Go to episodes</v-btn
              >
            </h3>
          </template>
        </FavoritesViewer>
        <FavoritesViewer
          class="mb-8"
          title="Favorite Locations"
          :items="favoriteLocations"
          path="locations"
        >
          <template #empty>
            <h3 class="mb-4 text-xl">
              <p>No favorite locations founded</p>
              <v-btn
                variant="outlined"
                class="mt-4"
                @click="push('/locations')"
              >
                Go to locations</v-btn
              >
            </h3>
          </template>
        </FavoritesViewer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";

const { fullName, favoriteCharacters, favoriteEpisodes, favoriteLocations } =
  useUserStore();
const { push } = useRouter();

const onEditInfo = () => {
  console.log("comming soon...");
};
</script>

<style lang="sass" scoped>
.profile__image_container
  height: 100%
  width: 385px
.profile__image_change_photo
  position: relative
  top: -30px
  left: 25px
</style>
