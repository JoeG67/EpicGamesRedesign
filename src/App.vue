<template>
  <header
    class="fixed top-0 left-0 w-full flex flex-col items-center lg:flex-row lg:items-center lg:pr-8 lg:space-x-8 bg-white shadow-md z-10"
  >
    <NaviBar />
  </header>

  <main class="mt-16">
    <div class="flex flex-wrap items-start">
    </div>
  </main>
</template>


<script setup lang="ts">
import PrimeVue from 'primevue/config';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NaviBar from './components/NaviBar.vue'
</script>
