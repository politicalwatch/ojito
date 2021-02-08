<template>
  <div class="main">
    <router-view/>
    <div
      class="main__back"
      v-if="party.id"
      :style="{backgroundColor: party.color}"
    ></div>
    <Footer/>
    <CookiesMsg v-if="isCookiesActive"></CookiesMsg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '@/components/Footer.vue';
import CookiesMsg from '@/components/CookiesMsg.vue';

export default {
  name: 'App',
  components: {
    Footer,
    CookiesMsg,
  },
  data() {
    return {
      cookiesStorageName: 'cookies-msg',
    };
  },
  computed: {
    ...mapGetters(['party', 'isCookiesActive']),
  },
  mounted() {
    if (localStorage.getItem(this.cookiesStorageName)) {
      this.$store.dispatch('hideCookieMsg');
    }
  },
};
</script>

<style lang="scss">
.main {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
