<template>
  <div class="footer">
    <div class="footer__wrap" :style="{backgroundColor: backColor}">
      <router-link :to="{name: 'about'}">Acerca de</router-link>
      <router-link :to="{name: 'methodology'}">Metodología</router-link>
      <a href="">Contacto</a>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    // ...mapGetters(['party']),
    backColor() {
      return 'transparent';
      /*
      return this.party && this.party.color
        ? this.party.color
        : 'black';
      */
    },
  },
};
</script>

<style lang="scss">
.footer {
  /*position: fixed;*/
  bottom: 0;
  left: 0;
  width: 100%;

  &__wrap {
    display: block;
    max-width: 320px;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 4px 14px;
    opacity: 0.9;
  }
}
</style>
