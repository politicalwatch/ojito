import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles
import './styles/_index.scss';

// App
const app = createApp(App)
  .use(store)
  .use(router);

// Global components

// Mount app
app.mount('#app');
