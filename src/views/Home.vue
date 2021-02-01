<template>
  <div class="page page--home">

    <div class="cover">
      <video autoplay muted loop>
        <source src="/video/cover.mp4" type="video/mp4">
      </video>
    </div>

    <div class="logo">
      <img src="img/logo.svg" alt="Ojito" id="logo">
    </div>

    <div class="topic-filter">
      <select name="filter" id="filter" v-model="activeFilter">
        <option selected value="">Selecciona una temática</option>
        <option
          v-for="(topic, i) in topics"
          :key="i"
          :value="topic.id"
        >{{topic.name}}</option>
      </select>
    </div>

    <div class="parties-list">
      <transition-group name="flip-list" tag="div">
        <PartyChip
          v-for="party in parties"
          :key="party"
          :party="party"
          :filter="activeFilter"
        ></PartyChip>
      </transition-group>
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
  data() {
    return {
      activeFilter: '',
    };
  },
  computed: {
    ...mapGetters(['parties', 'topics']),
  },
  beforeCreate() {
    this.$store.dispatch('getParties');
  },
  created() {
    const body = document.getElementsByTagName('body')[0];
    body.style.background = 'transparent';
  },
  watch: {
    activeFilter(filter) {
      this.$store.dispatch('sortParties', filter);
    },
  },
};
</script>

<style lang="scss">
.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  video {
    max-width: unset;
  }
}

@media (max-aspect-ratio: 16/9) {
  .cover video {
    width: auto;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
}
@media (min-aspect-ratio: 16/9) {
  .cover video {
    width: 100%;
    height: auto;
  }
}

.logo {
  display: block;
  max-width: 360px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
  }
}

.topic-filter {
  display: block;
  max-width: 360px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 1;
  select {
    display: block;
    width: calc(100% - 20px);
    color: white;
    background: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    border-bottom: 2px solid white;
    margin: 0 auto;
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
  position: relative;
  z-index: 1;
  display: block;
  max-width: 360px;
  margin: 0 auto;
  padding: 0 10px 30px;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
</style>
