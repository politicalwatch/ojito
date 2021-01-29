<template>
  <div class="page page--methodology">

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="page__content">
      <h1>Metodología</h1>

      <p>Lorem ipsum, dolor sit amet...</p>
    </div>

  </div>
</template>

<script>
import PageMixin from '@/views/PageMixin';

export default {
  name: 'Methodology',
  mixins: [
    PageMixin,
  ],
};
</script>
