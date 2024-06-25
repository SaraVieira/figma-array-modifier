<script lang="ts" setup>
import { ref } from "vue";
const count = ref(5);
const spacingX = ref(20);
const spacingY = ref(0);

const create = () => {
  window.parent.postMessage(
    {
      pluginMessage: {
        type: "array-modifier",
        count: count.value,
        spacingX: spacingX.value,
        spacingY: spacingY.value,
      },
    },
    "*"
  );
};
const cancel = () => {
  window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
</script>

<template>
  <section>
    <header>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 17v-4l-5 3l-5 -3v4l5 3z" />
        <path d="M17 8v-4l-5 3l-5 -3v4l5 3z" />
      </svg>
      <h1>The Blender Array Modifier</h1>
    </header>
    <div class="input-wrapper">
      <label>How many rectangles?</label>
      <input type="number" v-model="count" />
    </div>
    <div class="input-wrapper">
      <label>How far apart in X?</label>
      <input type="number" v-model="spacingX" />
    </div>
    <div class="input-wrapper">
      <label>How far apart in Y?</label>
      <input type="number" v-model="spacingY" />
    </div>
    <footer>
      <button class="primary" @click="create()">Create</button>
      <button class="destructive" @click="cancel()">Cancel</button>
    </footer>
  </section>
</template>
