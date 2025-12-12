<script>
import { useCount } from "../composables/countStore";

export default {
  setup() {
    const countStore = useCount();

    return {
      countStore,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
  methods: {
    tellParentChangeName() {
      this.$emit("change-name");
    },
  },
};
</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <h2>New Counter</h2>
  <p :class="$style.p">Global Count: {{ countStore.globalCount }}</p>
  <p>Local Count: {{ countStore.localCount }}</p>
  <button :class="$style.button" @click="countStore.globalCount += 10">
    Global
  </button>
  <button :class="$style.button" @click="countStore.incrementLocalCount">
    Local
  </button>
  <hr />
  <p>Favorite Food: {{ user.food }}</p>
  <button :class="$style.button" @click="tellParentChangeName">
    Change Name
  </button>
</template>

<style module>
.button {
  border: 10px solid green;
}
.p {
  background-color: rgb(35, 184, 55);
  width: 10%;
  height: 10%;
}
</style>
