<!-- eslint-disable max-len -->
<template>
  <div class="page page--static page--about">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito" aria-label="Ir al inicio">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar"  aria-label="Cerrar">
    </router-link>

    <div class="page__content interviews">
      <h1>Entrevistas</h1>

      <p></p>

      <ul>
        <li v-for="interview in interviews" :key="interview.link">
          <router-link :to="{name: 'interview', params: { interview: interview.link }}">{{ interview.title }}</router-link>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
import PageMixin from '@/views/PageMixin';

export default {
  name: 'About',
  mixins: [
    PageMixin,
  ],
  data() {
    return {
      interviews: [
        {
          link: 'mar2',
          title: 'Mar Cambrollé'
        }
      ]
    }
  }
};
</script>
