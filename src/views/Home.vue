<template>
  <div class="page page--home">

    <div class="logo">
      <img src="img/logo.svg" alt="Ojito" id="logo">
    </div>

    <div class="filter">
      filter here
    </div>

    <div class="parties-list">
      <PartyChip
        v-for="(party, i) in parties"
        :key="i"
        :party="party"
      ></PartyChip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PartyChip from '@/components/PartyChip.vue';

export default {
  name: 'Home',
  components: {
    PartyChip,
  },
  computed: {
    ...mapGetters(['parties']),
  },
  created() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#000';
  },
};
</script>

<style lang="scss">
.logo {
  display: block;
  max-width: 360px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.parties-list {
  padding: 0 10px;
  display: block;
  max-width: 360px;
  margin: 0 auto;
}
</style>
