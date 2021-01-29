<template>
  <div class="page page--about">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="page__content">
      <h1>Acerca de</h1>

      <p>Lorem ipsum, dolor sit amet...</p>
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
};
</script>
