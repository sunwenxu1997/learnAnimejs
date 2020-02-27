<template>
  <div class="overall">
    <div class="box">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          class="bck"
          ry="94.5"
          rx="94.5"
          cy="99.95313"
          cx="100"
          stroke-width="6"
          stroke="#ccc"
          fill="none"
        />
        <ellipse
          class="line"
          ry="94.5"
          rx="94.5"
          cy="99.95313"
          cx="100"
          stroke-width="6"
          stroke="#000"
          fill="none"
        />
      </svg>
      <h2>{{plan}}%</h2>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      plan: 100
    };
  },
  mounted() {
    let _this = this;
    anime({
      targets: ".line",
      //从起点开始画完
      //strokeDashoffset: [anime.setDashoffset, 0],
      strokeDashoffset: function(el) {
        var svgLength = anime.setDashoffset(el);
        return [svgLength, svgLength * (1 - _this.plan / 100)];
      },
      easing: "easeInOutSine",
      duration: 1000,
      loop: 1
    });
  }
};
</script>

<style  scoped>
.box {
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
svg {
  opacity: 0.7;
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);
  position: absolute;
  left: 0;
  top: 0;
}
svg ellipse {
  stroke-linecap: round;
}
</style>