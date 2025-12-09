<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <h1>User name: {{ user.name }}</h1>
  <p>Favourite food: {{ user.favouriteFood }}</p>
</template>
