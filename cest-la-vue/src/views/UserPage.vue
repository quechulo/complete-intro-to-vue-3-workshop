<script setup>
import UserCard from "@/components/UserCard.vue";
import { defineProps } from "vue";
// import { userList } from "@/composables/useUserStore";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

defineEmits(["update-user-list"]);

userStore.fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in userStore.userList"
        :user="user"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style></style>
