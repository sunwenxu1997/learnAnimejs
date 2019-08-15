<template>
  <div class="overall">
    <section class="box">
      <div
        class="staggering-grid-demo"
        @click="clickGrid(index)"
        v-for="(i,index) in 100"
        :key="index"
      ></div>
    </section>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.runAnime(0);
  },
  methods: {
    clickGrid(index) {
      this.runAnime(index);
    },
    runAnime(index) {
      anime({
        targets: ".staggering-grid-demo",
        scale: [
          { value: 0.2, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 600 }
        ],
        borderRadius: [
          { value: "50%", easing: "easeOutSine", duration: 500 },
          { value: 0, easing: "easeInOutQuad", duration: 600 }
        ],
        background: [
          { value: "#38cde7", easing: "easeOutSine", duration: 500 },
          { value: "#3884e7", easing: "easeInOutQuad", duration: 600 }
        ],
        delay: anime.stagger(100, { grid: [10, 10], from: index }), //grid 网格 [w , h] 宽高
        loop: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebebeb;
}
.box {
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .staggering-grid-demo {
    width: 20px;
    height: 20px;
    background: #3884e7;
    margin: 1px;
    cursor: pointer;
  }
}
</style>