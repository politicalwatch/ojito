<template>
  <div class="main">
    <router-view/>
    <div
      class="main__back"
      v-if="party.id"
      :style="{backgroundColor: party.color}"
    ></div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
  computed: {
    ...mapGetters(['party']),
  },
};
</script>

<style lang="scss">
.main {
  position: relative;
  &__back {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: transparent;
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
