<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "Click",
    },
    icon: {
      type: String,
    },
  },
};
</script>

<template>
  <button>{{ icon }} - {{ text }}</button>
</template>
