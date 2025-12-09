<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: {
    changeUserName: (payload) => {
      console.log(payload);
      if (payload === "dupa") {
        return false;
      } else {
        return true;
      }
    },
  },
  data: () => ({
    newName: "",
  }),
};
</script>

<template>
  <h1>User name: {{ user.name }}</h1>
  <p>Favourite food: {{ user.favouriteFood }}</p>
  <label for="newName">change user name</label>
  <input v-model="newName" />
  <button @click="this.$emit('changeUserName', this.newName)">
    change name
  </button>
</template>
