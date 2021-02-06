<template>
  <div class="tallymarks">
    <div
      v-for="(d, i) in getData()"
      :key="i"
      class="tallymarks__group"
      v-show="d.value > 0">
      <div
        v-for="(mark, j) in Array(d.value)"
        :key="j"
        class="tallymarks__mark"
        :style="{backgroundColor: color(d, j)}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TallyMarksChart',
  props: {
    datum: {
      type: Array,
      required: true,
      default: () => ([]),
    },
    color: {
      type: Function,
      required: false,
      default: () => 'white',
    },
  },
  methods: {
    getData() {
      return this.datum.filter((g) => g.value > 0);
    },
  },
};
</script>

<style lang="scss">
$mark-width: 2px;

.tallymarks {
  line-height: 0;
  height: 100%;
  position: relative;
  height: 100%;

  &__group {
    display: inline-block;
    height: 100%;
    min-height: 1px;
    margin-right: 6px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__mark {
    background: white;
    width: $mark-width;
    height: 100%;
    min-height: 1px;
    margin-right: $mark-width;
    display: inline-block;
    border-radius: $mark-width / 2;
    overflow: hidden;
    &:nth-child(5n) {
      transform: translate(-10px, 0) rotate(50deg) scaleY(1.3);
    }
    /*
    &:nth-child(6n) {
      margin-left: 2px;
    }
    */
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
