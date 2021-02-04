<!-- eslint-disable max-len -->
<template>
  <div class="page page--static page--contact">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="page__content">
      <h1>Contacto</h1>

      <p>Si eres una persona interesada en conocer más sobre el proyecto, eres un medio de comunicación o quieres participar en O.J.I.T.O., escríbenos a:</p>
      <p><a href="mailto:info@politicalwatch.es">info@politicalwatch.es</a></p>

    </div>

  </div>
</template>

<script>
import PageMixin from '@/views/PageMixin';

export default {
  name: 'Contacto',
  mixins: [
    PageMixin,
  ],
};
</script>
