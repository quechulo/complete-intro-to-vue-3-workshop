<script></script>

<template>
  <div class="wrapper">
    <aside class="sidebar">
      <slot name="aside" />
    </aside>
    <main><slot name="main" /></main>
  </div>
  <footer>
    <slot name="footer">
      Elo Grzelo
      <h1>the5</h1>
    </slot>
  </footer>
</template>

<style>
.sidebar {
  border: 2px solid red;
}
main {
  background-color: bisque;
}
footer {
  border: 2px solid blueviolet;
}
</style>
