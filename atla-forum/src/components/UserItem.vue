<script>
export default {
  emits: ["addUserToFav"],
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<template>
  <p>{{ user.name }}</p>
  <button @click="this.$emit('addUserToFav', this.user)">⭐ Favorite</button>
</template>
