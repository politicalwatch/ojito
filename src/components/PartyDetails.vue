<template>
  <div class="partydetails">

    <div class="partydetails__chart">
      <PartyChart :valuePercent="score"></PartyChart>
      <p class="partydetails__chart-legend">
        <span v-for="(t, i) in tallys" :key="i">
          <span v-if="t.value === 1">{{t.value}} {{t.name}}</span>
          <span v-if="t.value > 1">{{t.value}} {{t.name}}s</span>
          <br v-if="t.value > 0">
        </span>
      </p>
      <div class="partydetails__chart-center">
        <TallyMarksChart
          v-if="tallys.length"
          :color="tallysColor"
          :datum="tallys"
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
              :title="commit.compliance"
              :alt="getComplianceStr(commit)">
            <div class="partydetails__commit-title">
              <h3>{{commit.title}}</h3>
              <div class="partydetails__commit-meta">
                <span
                  v-if="!commit.initiatives.length"
                  class="partydetails__commit-link partydetails__commit-link--empty">
                  Sin actividad parlamentaria relevante
                </span>
                <span
                  v-if="commit.initiatives.length"
                  @click="toggleCommit(i)"
                  class="partydetails__commit-link partydetails__commit-link--initiative"
                  :class="{'is-expanded': isExpanded(i)}">
                  Ver iniciativas
                </span>
                <a
                  v-if="commit.initiatives.length && commit.pdf"
                  class="partydetails__commit-link"
                  :href="commit.pdf"
                  target="_blank"
                  rel="noopener">
                  Justificación del veredicto
                </a>
              </div>
              <div class="partydetails__commit-initiatives" v-show="isExpanded(i)">
                <h3>Iniciativas</h3>
                <ul>
                  <li v-for="(init, j) in commit.initiatives" :key="j">
                    <a :href="init.link">{{init.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
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
      expandedCommits: [],
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
    resetCalculation() {
      const p = this.overview.find((topic) => topic.id === this.commitment.id);
      this.score = p.score * 10;
      this.getTallys();
      this.expandedCommits = [];
    },
    getTallys() {
      const tallysCount = this.commitment.commits.reduce((acc, commit) => {
        acc[commit.compliance] += 1;
        return acc;
      }, {
        CUMPLIDO: 0,
        'PARCIALMENTE CUMPLIDO': 0,
        'NO CUMPLIDO': 0,
      });
      this.tallys = Object.keys(tallysCount).map((key) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
        value: tallysCount[key],
      }));
    },
    tallysColor(tally) {
      if (tally.name === 'Cumplido') return 'green';
      if (tally.name === 'No cumplido') return 'red';
      return 'orange';
    },
    getComplianceStr(commit) {
      return commit.compliance.toLowerCase().replace(/\s/g, '');
    },
    isExpanded(idx) {
      return this.expandedCommits.indexOf(idx) !== -1;
    },
    toggleCommit(idx) {
      const expIdx = this.expandedCommits.indexOf(idx);
      if (expIdx !== -1) {
        this.expandedCommits.splice(expIdx, 1);
      } else {
        this.expandedCommits.push(idx);
      }
    },
  },
  watch: {
    overview: 'resetCalculation',
    commitment: 'resetCalculation',
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
      h3 {
        line-height: 1.36;
        text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
      }
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
      justify-content: space-between;
    }
    &-link {
      font-weight: 600;
      background: black;
      padding: 2px 8px;
      margin-right: 22px;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &--empty {
        &:hover {
          cursor: default;
          text-decoration: none !important;
        }
      }
      &--initiative {
        padding-right: 20px;
        &:after {
          content: "";
          position: absolute;
          top: 7px;
          right: 7px;
          width: 6px;
          height: 6px;
          border: 2px solid white;
          border-top: 0;
          border-left: 0;
          transform-origin: 5px 5px;
          transform: rotate(45deg);
          transition: transform 250ms ease-in-out;
        }
        &.is-expanded {
          text-decoration: underline !important;
          &:after {
            transform: rotate(-135deg);
          }
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    &-initiatives {
      padding-left: 20px;
      h3 {
        margin-top: 20px;
      }
      li {
        list-style: disc;
        margin-left: 20px;
        line-height: 1.33;
        font-size: 14px;
      }
      a {
        display: block;
        margin-bottom: 9px;

        &:hover {
          text-decoration: underline;
        }
      }
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
      top: 121px;
      text-align: center;
    }
    &-legend {
      text-shadow: 0 1px 2px rgb(0 0 0 / 50%);
    }
  }

  .tallymarks {
    display: inline-block;
    background: black;
    padding: 7px;
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
    &__commit {
      &-meta {
        justify-content: flex-start;
      }
      &-link {
      }
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
