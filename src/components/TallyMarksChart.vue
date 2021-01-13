<template>
  <div class="tallymarks">
    <div v-for="(topic, i) in datum" :key="i" class="tallymarks__group">
      <div
        v-for="(mark, j) in Array(topic.total)"
        :key="j"
        class="tallymarks__mark"
        :style="{backgroundColor: getColor(topic)}"
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
  },
  methods: {
    getColor(topic) {
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
    margin-right: 4px;
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
  }
}
</style>
