<script>
import Pokedex from "./components/pokedex.vue";

export default {
  components: {
    Pokedex,
  },
  methods: {
    changeRegionHandler(p) {
      console.log(p)
    }
  }
};
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <Pokedex region="Hoenn" @change-region="changeRegionHandler($event)" />

    <template v-slot:fallback> Loading Pokedex data... </template>
  </Suspense>
</template>

<style></style>
