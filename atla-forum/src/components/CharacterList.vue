<script>
import UserItem from "./UserItem.vue";

export default {
  emits: ["addUserToFav"],
  components: {
    UserItem,
  },
  props: {
    characterList: {
      type: Array,
    },
  },
};
</script>

<template>
  <ul>
    <li
      v-for="(character, index) in characterList"
      :key="`even-character-${index}`"
    >
      <UserItem
        :user="character"
        @addUserToFav="this.$emit('addUserToFav', $event)"
      />
    </li>
  </ul>
</template>
