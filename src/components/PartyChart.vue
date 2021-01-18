<template>
  <div class="partychart" ref="chart" :style="{ height: `${height}px`}">
    <svg
      class="chart__svg"
      :viewBox="`0 0 ${width} ${height}`"
      :width="width"
      :height="height">
      <g
        class="chart__group"
        :transform="centerTransform"
      >
        <circle cx="0" cy="0" :r="radius" stroke="white" stroke-width="2" fill="transparent"/>
        <path :d="currentPath" fill="black"></path>
      </g>
    </svg>
  </div>
</template>

<script>
import { interpolate } from 'd3-interpolate';
import { min } from 'd3-array';
import { arc } from 'd3-shape';

const d3 = { interpolate, min, arc };

export default {
  name: 'PartyChart',
  data() {
    return {
      currentPath: '',
      width: 300,
      animPercent: 0,
    };
  },
  props: {
    height: {
      type: Number,
      required: false,
      default: 260,
    },
    valuePercent: {
      type: Number,
      required: false,
      default: 0,
    },
    valueStroke: {
      type: Number,
      required: false,
      default: 8,
    },
  },
  created() {
    this.arc = d3.arc();
  },
  mounted() {
    this.getDimensions();
    this.currentPath = this.progressArc(this.valuePercent);
    window.addEventListener('resize', this.onResize);
  },
  computed: {
    radius() {
      return 0.9 * (d3.min([this.width, this.height]) / 2);
    },
    centerTransform() {
      return `translate(${this.width / 2}, ${this.height / 2})`;
    },
  },
  methods: {
    getDimensions() {
      this.width = this.$refs.chart.clientWidth;
    },
    onResize() {
      this.getDimensions();
    },
    progressArc(value) {
      return this.arc({
        innerRadius: this.radius - (this.valueStroke / 2),
        outerRadius: this.radius + (this.valueStroke / 2),
        startAngle: 0,
        endAngle: (value / 100) * (Math.PI * 2),
      });
    },
    animate() {
      if (this.animPercent <= 10) {
        const currentPercent = this.interpolation(this.animPercent / 10);
        this.currentPath = this.progressArc(currentPercent);
        this.animPercent += 1;
        window.requestAnimationFrame(this.animate);
      }
    },
  },
  watch: {
    valuePercent(to, from) {
      this.animPercent = 0;
      this.interpolation = d3.interpolate(from, to);
      this.animate();
    },
  },
};
</script>

<style lang="scss">
.partychart {
}
</style>
