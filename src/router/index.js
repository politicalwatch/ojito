import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';
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
  {
    path: '/informe-covid',
    name: 'covid-report',
    component: () => import('../views/CovidReport.vue'),
  },
  {
    path: '/informe-final',
    name: 'final-report',
    component: () => import('../views/FinalReport.vue'),
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/CookiesPage.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollTop = 0;
    return { left: 0, top: 0 };
  },
});

// Register cookies message as view in localStorage
router.beforeEach((to, from) => {
  if (from.name) {
    store.dispatch('hideCookieMsg');
  }
});

export default router;
