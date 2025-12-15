<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    displayName() {
      return this.user?.name || "Unknown User";
    },
    displayWebsite() {
      return this.user?.website || "No website";
    },
  },
  methods: {
    goToUser() {
      this.$router.push(`/user/${this.user.id}`);
    },
  },
};
</script>

<template>
  <router-link :to="`/user/${user.id}`">
    <li :class="$style['user-card']">
      {{ displayName }}: {{ displayWebsite }}
    </li>
  </router-link>
</template>

<style module>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
