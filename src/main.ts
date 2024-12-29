import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// PrimeVue imports
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';  // PrimeIcons

// Tailwind import (make sure it's loaded after PrimeVue)
import './assets/main.css';  // Your Tailwind file

const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use PrimeVue plugin
app.use(PrimeVue);

// Mount the app
app.mount('#app');
