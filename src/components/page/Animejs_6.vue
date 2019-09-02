<template>
  <div>
    <div class="play-pause-demo">
      <section v-for="(i,index) in 3" :key="index" class="el"></section>
      <div ref="play">开始</div>
      <div ref="pause">暂停</div>
      <div ref="restart">重新开始</div>
      <div ref="reverse">反转方向</div>
    </div>
    <div class="block">
      <section class="seek-anim-demo"></section>
      <el-slider v-model="value" :show-tooltip="false"></el-slider>
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
      // 1.动画控制
        this.animation = anime({
          targets: ".play-pause-demo .el",
          translateX: 270,
          delay: function(el, i) {
            return i * 100;
          },
          direction: "alternate",
          loop: true,
          autoplay: false, //是否允许自动播放
          easing: "easeInOutSine"
        });

        this.$refs["play"].onclick = this.animation.play; //开始
        this.$refs["pause"].onclick = this.animation.pause; //暂停
        this.$refs["restart"].onclick = this.animation.restart; //重新开始
        this.$refs["reverse"].onclick = this.animation.reverse; //反转方向

      // 2.seek瞬移 animation.seek(timeStamp);跳转到特定时间  
      // this.animation = anime({
      //   targets: ".seek-anim-demo",
      //   translateX: 270,
      //   easing: "linear",
      //   autoplay:false
      // });
      // this.animation.seek(this.animation.duration * (this.value / 100));
    }
  }
};
</script>

<style lang="scss" scoped>
.el {
  width: 20px;
  height: 20px;
  background: goldenrod;
  margin: 2px;
}
.block {
  width:300px;
  margin: 0 100px;
  .seek-anim-demo {
    width: 30px;
    height: 30px;
    background: salmon;
  }
}
</style>