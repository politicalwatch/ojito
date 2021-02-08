<template>
  <div class="page page--party party">

    <router-link :to="{name: 'home'}" class="page__logo">
      <img src="/img/logo-sm.svg" alt="Ojito">
    </router-link>

    <router-link :to="{name: 'home'}" class="page__close">
      <img src="/img/icons/close.svg" alt="Cerrar">
    </router-link>

    <div class="party__head">
      <h1 class="party__name" @click="showScroll">{{party.name}}</h1>
    </div>

    <div class="party__tabs" id="tabs">
      <div
        v-for="(tab, i) in party.commitments"
        :key="i"
        :id="`party-tab-${i}`"
        class="party__tab"
        :class="{'is-active': commitment.id === tab.id}"
        @click="setCommitment(tab)">
        <div>{{getCommitmentName(tab)}}</div>
      </div>
    </div>

    <div class="party__empty" v-if="!commitment || !commitment.commits?.length > 0">
      <h2>Sin compromisos</h2>
    </div>

    <PartyDetails
      v-if="commitment && commitment.commits?.length > 0"
      :commitment="commitment"
      :overview="party.overview"
    ></PartyDetails>

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
      isScrolled: false,
    };
  },
  computed: {
    ...mapGetters(['parties', 'topics', 'party']),
  },
  mounted() {
    if (!this.parties.length) {
      this.$store.dispatch('getParties');
    } else {
      this.setParty();
    }

    // Trigger horizontal scroll animation to show hidden tabs
    setTimeout(() => {
      if (window.innerWidth < 1200) {
        this.showScroll();
      }
    }, 700);

    // Capture ESC key
    window.addEventListener('keyup', this.escapeKeyPress);
  },
  methods: {
    showScroll() {
      const myElement = document.getElementById('tabs');
      const limit = 36;
      const steps = 3;

      if (myElement && !this.isScrolled && myElement.scrollLeft < limit) {
        myElement.scrollLeft += steps;
        window.requestAnimationFrame(this.showScroll);
      } else if (myElement && myElement.scrollLeft > 0) {
        this.isScrolled = true;
        myElement.scrollLeft -= steps;
        window.requestAnimationFrame(this.showScroll);
      }
    },
    setCommitment(commit) {
      this.commitment = commit;
    },
    getCommitmentName(commitment) {
      const topic = this.topics.find((t) => t.id === commitment.id);
      return topic.name;
    },
    getCommitmentScore(commitment) {
      const topic = this.party.overview.find((t) => t.id === commitment.id);
      return topic.score;
    },
    escapeKeyPress(event) {
      if (event.key === 'Escape') {
        window.location.href = '/';
      }
    },
    setParty() {
      // Load party
      const party = this.parties
        .find((p) => p.shortname === this.$route.params.party);
      // Store party
      this.$store.dispatch('setParty', party);
      // Set active tab
      this.setCommitment(party.commitments[0]);
      // Change body background
      const app = document.getElementById('app');
      app.style.background = `linear-gradient(90deg, ${party.color}99 30%, ${party.color} 100%)`;
    },
  },
  watch: {
    parties: 'setParty',
  },
  beforeUnmount() {
    this.$store.dispatch('setParty', {});
    const app = document.getElementById('app');
    app.style.background = 'transparent';
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
    text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
  }

  &__tabs {
    display: flex;
    overflow-x: auto;
    margin-top: 24px;
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
    padding: 5px 20px 4px;
    cursor: pointer;
    white-space: pre;

    > div {
      text-shadow: 0 1px 2px rgb(0 0 0 / 60%);
    }
    &:hover > div {
      text-decoration: underline;
    }

    &.is-active {
      background: #000000;
      border-bottom-color: black;
    }
  }
  &__empty {
    margin: 40px 0;
    h2 {
      font-size: 24px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
      margin-bottom: 18px;
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
