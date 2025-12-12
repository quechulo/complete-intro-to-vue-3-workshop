import { ref } from "vue";

export const newCount = ref(100);

export function useCount() {
  const localCount = ref(500);

  return {
    newCount,
    localCount,
  };
}
