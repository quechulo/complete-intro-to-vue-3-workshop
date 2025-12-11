<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data: () => ({
    users: [],
    loading: false,
  }),
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
    },
    getUuid() {
      return uuidv4();
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  <main>
    <h1>Users Page</h1>
    <p>This is a place to view users!</p>
    <div v-if="this.users.length > 0">
      <ul>
        <li v-for="user in this.users" :key="getUuid">
          <pre>{{ user }}</pre>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 620px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}
</style>
