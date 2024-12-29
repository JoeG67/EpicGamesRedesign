<template>
  <header
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
import '../dist/output.css';
import './assets/main.css'; 

</script>
