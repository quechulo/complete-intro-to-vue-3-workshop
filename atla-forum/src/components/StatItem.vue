<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicStyles() {
      switch (this.type) {
        case "Air":
          return {
            border: `2px solid ${"blue"}`,
          };
        case "Earth":
          return {
            border: `2px solid ${"green"}`,
          };
        case "Water":
          return {
            border: `2px solid ${"blue"}`,
          };
        case "Fire":
          return {
            border: `2px solid red`,
          };
        default:
          return {
            border: `2px solid gray`,
          };
      }
    },
  },
};
</script>

<template>
  <div class="statItemWrapper" :style="dynamicStyles">{{ type }}: <slot /></div>
</template>

<style>
.statItemWrapper {
  width: 60px;
  margin-top: 0.5em;
  padding: 1em;
}
</style>
