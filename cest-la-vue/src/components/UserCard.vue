<script setup>
import { defineProps } from "vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="user-card">{{ props.user.name }}: {{ props.user.website }}</li>
</template>

<style>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
