import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// PrimeVue imports
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';  // Add this line if it's not present

// PrimeVue component registration (optional if registering locally)

const app = createApp(App);

// Use Pinia for state management
app.use(createPinia());

// Use PrimeVue plugin
app.use(PrimeVue);

// Mount the app
app.mount('#app');
