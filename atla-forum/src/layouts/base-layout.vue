<template>
  <div class="character-wrapper">
    <section>
      <slot name="characters"></slot>
    </section>
    <section>
      <slot name="newCharacter"></slot>
    </section>
  </div>
  <slot name="favList"></slot>
  <slot name="stats"></slot>
</template>

<style>
.character-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;
}
</style>
