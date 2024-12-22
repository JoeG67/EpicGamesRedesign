<script setup lang="ts">
import { Button } from 'primevue';
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-green-500 font-medium text-4xl -top-2 relative">{{ msg }}</h1>
    <h3 class="text-base md:text-lg text-center md:text-left">
      You’ve successfully created a project with
      <Button label="Submit" />
      <a href="https://vite.dev/" target="_blank" rel="noopener" class="text-blue-500 underline">
        Vite
      </a>
      +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="text-blue-500 underline">
        Vue 3
      </a>.
    </h3>
  </div>
</template>
