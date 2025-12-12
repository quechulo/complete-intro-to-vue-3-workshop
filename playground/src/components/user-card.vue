<script setup>
import { newCount } from "@/composables/countStore";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["change-name"]);
const tellParentChangeName = () => {
  emits("change-name");
};
</script>

<template>
  <h1>User: {{ props.user.name }}</h1>
  <h2>{{ newCount }}</h2>
  <p>Favorite Food: {{ props.user.food }}</p>
  <button @click="tellParentChangeName">Change Name</button>
</template>
