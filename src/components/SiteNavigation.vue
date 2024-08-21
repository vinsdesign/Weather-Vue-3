<template>
  <header class="sticky top-0 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-light py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <font-awesome-icon
            icon="fa-solid fa-cloud"
            class="text-2xl hover:text-secondary cursor-pointer"
          />
          <h2 class="font-PoppinsMedium">SkySync</h2>
        </div>
      </RouterLink>
      <div class="flex gap-4 flex-1 justify-end">
        <font-awesome-icon
          icon="fa-solid fa-circle-info"
          class="text-xl hover:text-secondary cursor-pointer"
          @click="toggleModal"
        />
        <font-awesome-icon
          icon="fa-solid fa-plus"
          class="text-xl hover:text-secondary cursor-pointer"
        />
      </div>
      <BaseModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
        class="text-black"
      >
        <h1 class="font-PoppinsSemiBold text-2xl">About</h1>
        <p>
          The local weather allows you to track the current and future weather
          of cities of your choosing.
        </p>
        <h1 class="font-PoppinsSemiBold text-2xl">How It Works:</h1>
        <ol class="list-decimal ml-5">
          <li>
            Search for your city by entering the name into the search bar.
          </li>
          <li>
            Select a city within the results, this will take you to current
            weather for your selection
          </li>
          <li>
            Track the city by checking on the "+" icon in the top right. This
            will save the city to views at later time on the home page
          </li>
        </ol>
        <h1 class="font-PoppinsSemiBold text-2xl">Removing a city</h1>
        <p>
          If you no longer with to track a city, simply select the city within
          the home page. At the bottom of the page there will be am option to
          delete the city
        </p>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
