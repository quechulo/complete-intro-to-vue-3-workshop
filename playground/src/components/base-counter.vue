<script setup>
import { computed, reactive } from "vue";
import { useCount } from "../composables/countStore";

const state = reactive({
  count: 10,
  counterTitle: "Counter Standard",
  incrementAmount: 8,
});

const countStore = useCount();
console.log(countStore);

const displayTitle = computed(() => {
  if (state.count > 20) {
    return "Counter Standard - Very Long";
  } else {
    return "Counter Standard";
  }
});
const optimizedIncrementAmount = computed(() => {
  return displayTitle.value.length * state.incrementAmount;
});

const incrementCount = (newAmount) => {
  console.log(newAmount);
  state.count += state.incrementAmount;
  countStore.newCount.value += 10;
  // state.count += optimizedIncrementAmount.value;
};
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <h2>{{ countStore.newCount }}</h2>
  <p :data-increment-by="state.incrementAmount">{{ state.count }}</p>
  <button @click="incrementCount">Increment Count</button>
  <h1>{{ state.incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="text" v-model="state.incrementAmount" />
  </div>
</template>
