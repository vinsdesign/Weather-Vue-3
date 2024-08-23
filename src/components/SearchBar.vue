<template>
  <div class="container text-white">
    <div class="pt-5 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResuls"
        placeholder="Search for a city or state"
        class="bg-transparent w-full px-1 py-2 border-b focus:border-secondary focus:outline-none text-white focus:shadow-sm"
      />
      <ul
        class="absolute bg-secondary text-light w-full shadow-md py-1 px-1 top-16"
        v-if="mapboxSearchResults"
      >
        <li
          v-for="searchResults in mapboxSearchResults"
          :key="searchResults.id"
          class="py-2 cursor-pointer"
        >
          {{ searchResults.place_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);

const getSearchResuls = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      const result = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
      );
      mapboxSearchResults.value = result.data.features;
      console.log(mapboxSearchResults.value);
      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>

<style lang="scss" scoped></style>
