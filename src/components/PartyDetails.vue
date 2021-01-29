<template>
  <div class="partydetails">

    <div class="partydetails__chart">
      <PartyChart :valuePercent="score"></PartyChart>
      <p class="partydetails__chart-legend">
        Lorem ipsum dolor sit amet
      </p>
      <div class="partydetails__chart-center">
        <TallyMarksChart
          v-if="tallys.length"
          :color="() => 'white'"
          :datum="[tallys]"
        ></TallyMarksChart>
      </div>
    </div>

    <div class="partydetails__commits">
      <h2>Compromisos</h2>
      <div
        v-for="(commit, i) in commitment.commits"
        :key="i"
        class="partydetails__commit"
      >
        <div class="partydetails__commit">
          <div class="partydetails__commit-head">
            <img
              class="partydetails__commit-compliance"
              :src="`/img/compliance/${getComplianceStr(commit)}.svg`"
              :alt="getComplianceStr(commit)">
            <h3 class="partydetails__commit-title">
              {{commit.title}}
              <span class="partydetails__commit-meta">
                <a
                  class="partydetails__commit-link"
                  :href="commit.link"
                  target="_blank"
                  rel="noopener">
                  Descargar PDF
                </a>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartyChart from '@/components/PartyChart.vue';
import TallyMarksChart from '@/components/TallyMarksChart.vue';

export default {
  name: 'PartyDetails',
  components: {
    PartyChart,
    TallyMarksChart,
  },
  data() {
    return {
      score: 0,
      total: 10,
      tallys: [],
    };
  },
  props: {
    commitment: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    overview: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    calculeScore() {
      const p = this.overview.find((topic) => topic.id === this.commitment.id);
      this.score = p.score * 10;
      this.tallys = this.commitment.commits;
    },
    getComplianceStr(commit) {
      return commit.compliance.toLowerCase().replace(/\s/g, '');
    },
  },
  watch: {
    overview: 'calculeScore',
    commitment: 'calculeScore',
  },
};
</script>

<style lang="scss">
.partydetails {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  align-items: flex-start;

  &__commits {
    margin-bottom: 24px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
      margin-bottom: 18px;
    }
  }
  &__commit {
    margin-bottom: 30px;
    &-head {
      margin-bottom: 2px;
      display: flex;
      align-items: flex-start;
    }
    &-title {
      padding-left: 10px;
      line-height: 1.36;
      text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
    }
    &-compliance {
      margin-top: -7px;
      width: 70px;
      transform: rotate(-9deg);
    }
    &-meta {
      margin-top: 12px;
      font-size: 12px;
      display: flex;
    }
    &-link {
      font-weight: 600;
      background: black;
      padding: 2px 8px;
    }
  }

  &__chart {
    text-align: center;
    margin: 20px 0;
    width: 100%;
    max-width: 100%;
    position: relative;
    &-center {
      position: absolute;
      width: 100%;
      height: 14px;
      left: 0;
      top: calc(50% - 27px);
      text-align: center;
    }
    &-legend {
      text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
    }
  }
}

@media screen and (min-width: 480px) {
  .partydetails {
    &__commits h2 {
      margin-bottom: 32px;
    }
    &__commit {
      margin-bottom: 60px;
    }
  }
}

@media screen and (min-width: 680px) {
  .partydetails {
    flex-direction: row;
    flex-wrap: wrap;

    &__chart {
      flex: 1 0 100%;
    }
  }
}

@media screen and (min-width: 1180px) {
  .partydetails {
    margin-top: 60px;
    flex-wrap: nowrap;

    &__commits {
      flex: 0 0 calc(66% - 20px);
    }

    &__chart {
      flex: 0 0 calc(33% - 20px);
      max-width: calc(33% - 20px);
    }
    &__chart {
      order: 3;
    }
  }
}
</style>
