<template>
  <div class="minichart">
    <div class="minichart__back"></div>
    <div class="minichart__bar" :style="{width: barWidth}"></div>
    <div class="minichart__val">{{acc}}/{{total}}</div>
  </div>
</template>

<script>
export default {
  name: 'MiniChart',
  props: {
    total: {
      type: Number,
      required: true,
      default: 1,
    },
    acc: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    barWidth() {
      return this.total > 0
        ? `${(this.acc / this.total) * 100}%`
        : 0;
    },
  },
};
</script>

<style lang="scss">
$height: 12px;

.minichart {
  position: relative;
  margin-top: 3px;
  height: $height;
  width: 60px;
  border-radius: $height/2;
  overflow: hidden;

  &__back {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: $height;
  }
  &__bar {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    height: 100%;
    border-radius: $height/2;
    height: $height;
  }
  &__val {
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    font-size: 12px;
    line-height: 1;
    margin-left: 4px;
  }
}

@media screen and (min-width: 300px) {
  .minichart {
    width: 100px;
  }
}
</style>
