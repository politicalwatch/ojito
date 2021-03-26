<!-- eslint-disable max-len -->
<template>
  <div class="page page--static page--about">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito" aria-label="Ir al inicio">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar"  aria-label="Cerrar">
    </router-link>

    <div class="page__content">
      <h2 v-if="interview">{{ interview.title }}</h2>
      <div class="video-container" v-if="interview">
        <iframe width="560" height="315" :src="interview.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
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
      interview: false
    }
  },
  mounted() {
    const key = this.$route.params.interview
    const interviews = {
      mar: {
        type: 'pdf',
        url: '/pdf/mar.pdf',
      },
    }

    const interview = interviews[key]

    if (interview.type === 'pdf') {
      window.location.href = interview.url
    } else {
      this.interview = interview
    }
  },
};
</script>
