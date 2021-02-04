<template>
  <div class="party-chip" @click="goToParty">
    <div class="party-chip__name">
      {{party.shortname}}
    </div>
    <div class="party-chip__values">
      <TallyMarksChart
        :datum="tallys"
        :color="tallyMarksColor"
      ></TallyMarksChart>
    </div>
  </div>
</template>

<script>
import TallyMarksChart from '@/components/TallyMarksChart.vue';

export default {
  name: 'PartyChip',
  components: {
    TallyMarksChart,
  },
  props: {
    party: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    filter: {
      type: String,
      default: '',
    },
  },
  computed: {
    partyOverview() {
      return this.party.overview; // TODO: Improve
    },
    tallys() {
      if (!this.filter) {
        const score = this.party.overview.length > 0
          ? Math.round(this.party.overview
            .reduce((acc, obj) => acc + obj.score, 0) / this.party.overview.length)
          : 0;
        return [{
          name: 'Cumplido',
          value: score,
        }, {
          name: 'No cumplido',
          value: 10 - score,
        }];
      }

      const commitment = this.party.commitments.find((c) => c.id === this.filter);
      if (commitment === undefined) return [];

      const tallysCount = commitment.commits.reduce((acc, commit) => {
        acc[commit.compliance.toUpperCase()] += 1;
        return acc;
      }, {
        CUMPLIDO: 0,
        'PARCIALMENTE CUMPLIDO': 0,
        'NO CUMPLIDO': 0,
      });
      return Object.keys(tallysCount)
        .filter((key) => key !== '')
        .map((key) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
          value: tallysCount[key],
        }));
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
    tallyMarksColor(tally) {
      if (tally.name === 'Cumplido') return 'green';
      if (tally.name === 'No cumplido') return 'red';
      return 'orange';
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
