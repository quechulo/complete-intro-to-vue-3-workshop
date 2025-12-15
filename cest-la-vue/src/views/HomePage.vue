<script setup>
import { userList } from "../composables/useUserStore";
import { computed, ref } from "vue";
import { useUserStore } from "../stores/UserStore";
const userStore = useUserStore();

import { useClipboardItems } from "@vueuse/core";

function createClipboardItems(text) {
  const mime = 'text/plain'
  const blob = new Blob([text], { type: mime })
  return new ClipboardItem({
    [mime]: blob,
  })
}

const { content, copy, copied, isSupported } = useClipboardItems();

const clip = ref("4253");
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <hr />
    <h3>copy to clipboard:</h3>
    <div v-if="isSupported">
      <button @click="() => copy([createClipboardItems(clip)])">
        <!-- by default, `copied` will be reset in 1.5s -->
        <span v-if="!copied">Copy</span>
        <span v-else>Copied!</span>
      </button>
      <p>
        Current copied: <code>{{ content || "none" }}</code>
      </p>
    </div>
    <p v-else>Your browser does not support Clipboard API</p>
    <input v-model="clip" />
    <!-- <button :disabled="!content" @click="console.log(content)">Copy!</button> -->
    <hr />
    <ul>
      <li v-for="user in userStore.shortUserList">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style>
button:disabled {
  background-color: ghostwhite;
}
</style>
