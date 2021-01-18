<template>
  <div class="partydetails">

    <div class="partydetails__chart">
      <PartyChart :valuePercent="percent"></PartyChart>
      <p class="partydetails__chart-legend">
        Lorem ipsum dolor sit amet
      </p>
      <div class="partydetails__chart-center">
        <TallyMarksChart
          :color="tallyMarksColor"
          :datum="[datum]"
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
          <h3 class="partydetails__commit-title">{{commit.title}}</h3>
          <span class="partydetails__commit-meta">
            <time class="partydetails__commit-date" :datetime="commit.date">
              {{commit.date}}
            </time>
            <div class="partydetails__commit-chart">
              <MiniChart :total="commit.total" :acc="commit.acc"></MiniChart>
            </div>
            <a class="partydetails__commit-link" :href="commit.link" target="_blank" rel="noopener">
              Descargar PDF
            </a>
          </span>
        </div>
      </div>
    </div>

    <div class="partydetails__statements">
      <h2>Declaraciones</h2>
      <a
        v-for="(state, i) in commitment.statements"
        :key="i"
        class="partydetails__statement"
        :href="state.link"
        target="_blank"
        rel="noopener"
      >{{state.title}}</a>
    </div>

  </div>
</template>

<script>
import PartyChart from '@/components/PartyChart.vue';
import MiniChart from '@/components/MiniChart.vue';
import TallyMarksChart from '@/components/TallyMarksChart.vue';

export default {
  name: 'PartyDetails',
  components: {
    PartyChart,
    MiniChart,
    TallyMarksChart,
  },
  props: {
    commitment: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    datum() {
      if (!this.commitment || !this.commitment.commits) {
        return { acc: 0, total: 0 };
      }
      return this.commitment.commits.reduce((acum, o) => ({
        acc: acum.acc + o.acc,
        total: acum.total + o.total,
      }), { acc: 0, total: 0 });
    },
    percent() {
      return !this.datum || this.datum.total < 1
        ? 0
        : (this.datum.acc / this.datum.total) * 100;
    },
  },
  methods: {
    tallyMarksColor(topic, i) {
      return (i < this.datum.acc) ? 'black' : 'white';
    },
  },
};
</script>

<style lang="scss">
.partydetails {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  &__commits {
    margin-bottom: 24px;
    h2 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  &__commit {
    margin-bottom: 10px;
    &-title {
      margin-bottom: 2px;
    }
    &-meta {
      font-size: 12px;
      display: flex;
    }
    &-date {
      margin-right: 10px;
    }
    &-chart {
      margin-right: 10px;
    }
    &-link {
      text-decoration: underline;
      font-weight: 600;
    }
  }

  &__statements {
    margin-bottom: 24px;
    h2 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  &__statement {
    display: block;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.0909090909;
    margin-bottom: 10px;
  }

  &__chart {
    text-align: center;
    margin: 20px 0;
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
  }
}

@media screen and (min-width: 480px) {
  .partydetails {
    &__commits h2,
    &__statements h2 {
      margin-bottom: 16px;
    }
    &__commit,
    &__statement {
      margin-bottom: 20px;
    }
  }
}

@media screen and (min-width: 680px) {
  .partydetails {
    flex-direction: row;
    flex-wrap: wrap;

    &__commits,
    &__statements {
      padding-right: 20px;
      flex: 0 0 calc(50% - 20px);
    }
    &__chart {
      flex: 1 0 100%;
    }
  }
}

@media screen and (min-width: 1180px) {
  .partydetails {
    margin-top: 60px;
    flex-wrap: nowrap;

    &__commits,
    &__statements,
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
