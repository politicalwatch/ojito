<template>
  <div class="page page--party party">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="party__head">
      <h1 class="party__name">{{party.shortName}}</h1>
      <p class="party__hint">Selecciona el compromiso para ver el detalle</p>
    </div>

    <div class="party__tabs">
      <div
        v-for="(tab, i) in party.commitments"
        :key="i"
        class="party__tab"
        :class="{'is-active': commitment.id === tab.id}"
        @click="setCommitment(tab)">
        <div>{{getCommitmentName(tab)}}</div>
      </div>
    </div>

    <PartyDetails :commitment="commitment"></PartyDetails>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PartyDetails from '@/components/PartyDetails.vue';

export default {
  name: 'Party',
  components: {
    PartyDetails,
  },
  data() {
    return {
      commitment: {},
    };
  },
  computed: {
    ...mapGetters(['parties', 'topics', 'party']),
  },
  created() {
    if (!this.party.id) {
      // Load party if it's not loaded yet
      const party = this.parties
        .find((p) => p.shortName === this.$route.params.party);
      this.$store.dispatch('setParty', party);
    }

    // Set initial active tab
    this.setCommitment(this.party.commitments[0]);

    // Change body background
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = this.party.color;
    body.style.backgroundImage = `url(${this.party.background})`;

    // Capture ESC key
    window.addEventListener('keyup', this.escapeKeyPress);
  },
  methods: {
    setCommitment(commit) {
      this.commitment = commit;
    },
    getCommitmentName(commitment) {
      const topic = this.topics.find((t) => t.id === commitment.id);
      return topic.name;
    },
    escapeKeyPress(event) {
      if (event.key === 'Escape') {
        window.location.href = '/';
      }
    },
  },
  beforeUnmount() {
    this.$store.dispatch('setParty', {});
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#000';
    body.style.backgroundImage = undefined;
    window.removeEventListener('keyup', this.escapeKeyPress);
  },
};
</script>

<style lang="scss">
.party {
  &__name {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 32px;
  }

  &__hint {
    font-size: 14px;
  }

  &__tabs {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0;
    }
    &::-webkit-scrollbar-track {
      opacity: 0;
      display: none;
      -webkit-box-shadow: none;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 0;
      display: none;
      -webkit-box-shadow: none;
    }
  }
  &__tab {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid white;
    padding: 0 20px 4px;
    cursor: pointer;

    &:first-child {
      padding-left: 0;
    }

    &.is-active {
      color: black;
      border-bottom-color: black;
    }
  }
}

@media screen and (min-width: 1180px) {
  .party {
    &__name {
      margin-top: 100px;
    }
  }
}
</style>
