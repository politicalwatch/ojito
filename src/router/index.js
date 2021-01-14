import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/partido/:party',
    name: 'party',
    component: () => import('../views/Party.vue'),
  },
  {
    path: '/acerca-de',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/metodologia',
    name: 'methodology',
    component: () => import('../views/Methodology.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    // const body = document.getElementsByTagName('body')[0];
    // body.scrollIntoView();
    return { left: 0, top: 0 };
  },
});

export default router;
