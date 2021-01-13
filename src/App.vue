<template>
  <div class="main">
    <router-view/>
    <div
      class="main__back"
      v-if="party.id"
      :style="{backgroundColor: this.party.color}"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['party']),
  },
  created() {
    this.$store.dispatch('getParties');
  },
};
</script>

<style lang="scss">
.main {
  height: 100%;
  overflow: auto;
  position: relative;
  &__back {
    position: absolute;
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
/*
@media screen and (min-width: 1180px) {
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
*/
</style>
