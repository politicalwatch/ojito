<template>
  <div class="page page--home">

    <div class="logo">
      <img src="img/logo.svg" alt="Ojito" id="logo">
    </div>

    <div class="topic-filter">
      <select name="filter" id="filter">
        <option
          v-for="(topic, i) in topics"
          :key="i"
          :value="topic.id"
        >{{topic.name}}</option>
      </select>
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
    ...mapGetters(['parties', 'topics']),
  },
  created() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#000';
    body.style.backgroundImage = undefined;
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

.topic-filter {
  display: block;
  max-width: 360px;
  margin: 0 auto 60px;
  select {
    display: block;
    width: calc(100% - 50px);
    color: white;
    background: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    border-bottom: 2px solid white;
    margin: 0 25px;
    &:focus {
      outline: 0;
      border: 0;
      border-bottom: 2px solid #949494;
    }
  }
  option {
    color: black;
  }
}

.parties-list {
  display: block;
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px;
}

</style>
