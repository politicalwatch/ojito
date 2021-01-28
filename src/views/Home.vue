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

    <a href="https://politicalwatch.es/" class="tenant">
      <img src="img/politicalwatch.png" alt="PoliticalWatch">
    </a>
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
.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
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
  padding: 0 10px 30px;
}

.tenant {
  display: block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 12px;
  img {
    width: 200px;
  }
}

</style>
