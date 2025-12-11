<script>
import UserCard from "./components/user-card.vue";
import BaseCounter from "./components/base-counter.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseLayout from "./components/base-layout.vue";

export default {
  components: {
    BaseCounter,
    UserCard,
    BaseButton,
    BaseLayout,
  },
  data() {
    return {
      message: "Hello it works",
      listOfNumbers: [
        {
          name: 1,
          id: "6a887cd2-f0bf-4321-b192-92016f82a883",
          list: [1, 2, 3],
        },
        {
          name: 2,
          id: "8d14d90b-2d47-473e-8293-d5c324111d0d",
          list: [1, 2, 3],
        },
        {
          name: 3,
          id: "cd806d65-2309-4625-9104-dcd636cd79b5",
          list: [1, 2, 3],
        },
        {
          name: 4,
          id: "00c939cd-fbf4-46d0-8e61-0bc2ce8a5332",
          list: [1, 2, 3],
        },
        {
          name: 5,
          id: "295a8170-59c1-4462-9de1-3c9cd41cedab",
          list: [1, 2, 3],
        },
      ],
      userData: {
        name: "Ben",
        preferredFramework: "vue",
        favoriteFood: "sushi",
        favoriteNumbers: [8, 10, 12],
      },
    };
  },
  computed: {
    refinedUserData() {
      return {
        name: this.userData.name,
        food: this.userData.favoriteFood,
      };
    },
  },
  methods: {
    changeName() {
      this.userData.name = "Charlie";
    },
  },
};
</script>

<template>
  <UserCard :user="refinedUserData" @change-name="changeName" />
  <BaseCounter />
  <br />
  <br />
  <br />

  <BaseButton> Home - Hell </BaseButton>
  <BaseLayout>
    <template v-slot:aside> Aside content </template>
    <template v-slot:main><UserCard :user="refinedUserData" /></template>
    <template v-slot:footer>stupka</template>
  </BaseLayout>
</template>
