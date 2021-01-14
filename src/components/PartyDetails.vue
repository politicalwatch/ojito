<template>
  <div class="partydetails">

    <div class="partydetails__chart">chart here</div>

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
import MiniChart from '@/components/MiniChart.vue';

export default {
  name: 'PartyDetails',
  components: {
    MiniChart,
  },
  props: {
    commitment: {
      type: Object,
      required: true,
      default: () => ({}),
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
    margin: 80px 0;
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
    }
    &__chart {
      order: 3;
    }
  }
}
</style>
