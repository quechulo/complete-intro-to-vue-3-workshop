<script setup>
import Pokedex from "./components/pokedex.vue";
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";

const changeRegionHandler = (p) => {
  console.log(p);
};
</script>

<template>
  <h1>New App</h1>
  <BaseCounter />
  <UserCard :user="{ name: 'Mike', food: 'pizza' }" />
  <!-- <Suspense>
    <Pokedex region="Hoenn" @change-region="changeRegionHandler($event)" />

    <template v-slot:fallback> Loading Pokedex data... </template>
  </Suspense> -->
</template>

<style></style>
