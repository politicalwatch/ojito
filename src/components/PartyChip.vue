<template>
  <div class="party-chip" @click="goToParty">
    <div class="party-chip__name">
      {{party.shortname}}
    </div>
    <div class="party-chip__values">
      <!-- <TallyMarksChart :datum="partyOverview" :color="tallyMarksColor"></TallyMarksChart> -->
    </div>
  </div>
</template>

<script>
// import TallyMarksChart from '@/components/TallyMarksChart.vue';

export default {
  name: 'PartyChip',
  components: {
    // TallyMarksChart,
  },
  props: {
    party: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    partyOverview() {
      return this.party.overview; // TODO: Improve
    },
  },
  methods: {
    goToParty() {
      this.$store.dispatch('setParty', this.party);
      this.$router.push({
        name: 'party',
        params: {
          party: this.party.shortname,
        },
      });
    },
    tallyMarksColor(topic) {
      if (topic.acc / topic.total > 0.7) {
        return 'green';
      }
      if (topic.acc / topic.total > 0.4) {
        return 'yellow';
      }
      return 'red';
    },
  },
};
</script>

<style lang="scss">
.party-chip {
  cursor: pointer;
  background: rgba(255,255,255,0.1);
  border: 3px solid white;
  border-radius: 30px;
  padding: 6px 18px;
  margin-bottom: 16px;
  transition: background-color 250ms ease;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: rgba(255,255,255,0.3);
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
  }
  &__values {
    height: 20px;
    margin-top: 8px;
  }
}
</style>
