<template>
  <div class="party-chip" :aria-label="`Ver ${party.shortname}`" @click="goToParty">
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

const tallyParser = (compliance, obj) => {
  const acc = { ...obj };
  if (compliance.toUpperCase() === 'CUMPLIDO') {
    acc.CUMPLIDO += 1;
  } else if (compliance.toUpperCase() === 'PARCIALMENTE CUMPLIDO') {
    acc['PARCIALMENTE CUMPLIDO'] += 1;
  } else {
    acc['NO CUMPLIDO'] += 1;
  }
  return acc;
};

const baseScore = {
  CUMPLIDO: 0,
  'PARCIALMENTE CUMPLIDO': 0,
  'NO CUMPLIDO': 0,
};

const tallysLimit = 40;

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
        // Sum all tallymarks from all commitments.commits
        const score2 = this.party.commitments
          .reduce((acc, commitment) => {
            const subs = commitment.commits
              .reduce((bcc, commit) => tallyParser(commit.compliance, bcc), baseScore);
            return {
              CUMPLIDO: acc.CUMPLIDO + subs.CUMPLIDO,
              'PARCIALMENTE CUMPLIDO': acc['PARCIALMENTE CUMPLIDO'] + subs['PARCIALMENTE CUMPLIDO'],
              'NO CUMPLIDO': acc['NO CUMPLIDO'] + subs['NO CUMPLIDO'],
            };
          }, baseScore);

        const totalTallys = Object.keys(score2).reduce((acc, key) => acc + score2[key], 0);

        let reduceFactor = 1;
        if (totalTallys > tallysLimit) reduceFactor = tallysLimit / totalTallys;
        if (totalTallys === 0) reduceFactor = 0;

        return Object.keys(score2).map((key) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
          value: Math.round(score2[key] * reduceFactor),
        }));
      }

      // Get only the tallymarks from the current commitment
      const commitment = this.party.commitments.find((c) => c.id === this.filter);
      if (commitment === undefined) return [];

      const tallysCount = commitment.commits
        .reduce((acc, commit) => tallyParser(commit.compliance, acc), baseScore);

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
  padding: 2px 9px;
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
    line-height: 36px;
    font-size: 14px;
  }
  &__values {
    height: 20px;
    margin-top: 8px;
  }
}

@media screen and (min-width: 380px) {
  .party-chip {
    padding: 6px 18px;
    &__name {
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 440px) {
  .party-chip {
    &__name {
      font-size: 22px;
    }
  }
}
</style>
