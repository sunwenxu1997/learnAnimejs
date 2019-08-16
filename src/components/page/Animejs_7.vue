<template>
  <div>
    <div class="block">
      <section class="timeline-controls-demo square"></section>
      <section class="timeline-controls-demo circle"></section>
      <el-slider ref="controlsProgressEl" v-model="value" :show-tooltip="false"></el-slider>
      <!-- <input type="text" ref="controlsProgressEl"> -->
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  watch: {
    value() {
      this.animation.seek(this.animation.duration * (this.value / 100));
    }
  },
  data() {
    return {
      animation: null,
      value: 0
    };
  },
  mounted() {
    this.runAmine();
  },
  methods: {
    runAmine() {
      // 时间轴控制
      var controlsProgressEl = this.$refs['controlsProgressEl']
      console.log(controlsProgressEl)
      let _this = this
      _this.animation = anime.timeline({
        direction: "alternate",
        loop: 1,
        duration: 500,
        easing: "easeInOutSine",
        update: function(anim) {
          controlsProgressEl.value =  _this.animation.progress;
        }
      });
      this.animation.add({
        targets: ".timeline-controls-demo.square",
        translateX: 270
      }).add(
        {
          targets: ".timeline-controls-demo.circle",
          translateX: 270
        },
        "-=100"
      );
      //   this.animation = anime({
      //     targets: ".timeline-controls-demo",
      //     translateX: 270,
      //     easing: "linear",
      //     autoplay:false
      //   });
      //   this.animation.seek(this.animation.duration * (this.value / 100));
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 300px;
  margin: 100px;
  .timeline-controls-demo {
    width: 30px;
    height: 30px;
    background: salmon;
    margin: 10px;
  }
  .circle {
    border-radius: 50%;
  }
}
</style>