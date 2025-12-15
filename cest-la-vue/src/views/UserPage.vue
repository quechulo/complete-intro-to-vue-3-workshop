<script setup>
import UserCard from "../components/UserCard.vue";
import { userList } from "../composables/useUserStore";
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

defineEmits(["update-user-list"]);

const loading = ref(false);
const error = ref(null);
let abortController = null;

async function fetchUsers() {
  // Cancel any ongoing requests
  if (abortController) {
    abortController.abort();
  }

  abortController = new AbortController();
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortController.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    userList.value = data;
  } catch (err) {
    // Ignore abort errors as they're expected
    if (err.name !== "AbortError") {
      error.value = err.message;
      console.error("Failed to fetch users:", err);
    }
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (userList.value.length === 0) {
    fetchUsers();
  }
});

onUnmounted(() => {
  // Cancel any ongoing requests when component is unmounted
  if (abortController) {
    abortController.abort();
  }
});
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div v-if="loading">Loading users...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <UserCard
        v-for="user in userList"
        :user="user"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style></style>
