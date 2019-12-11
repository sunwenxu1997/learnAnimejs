<template>
  <div class="overall">
    <div class="person">
      <div class="head"></div>
      <div class="body">
        <div class="hand left"></div>
        <div class="hand right"></div>
      </div>
      <div class="leg">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    this.play();
  },
  methods: {
    play() {
      anime
        .timeline({
          easing: "easeInOutQuad", //动画速率
          direction: "alternate", //返回执行
          duration: 400, //动画时间
          loop: true //执行次数 true 为无限次
        })
        .add({ targets: ".person", rotate: [10, 20] }, 0) //身体是否倾斜
        .add({ targets: ".hand.left", rotate: [80, -50] }, 0) //左手晃动幅度
        .add({ targets: ".hand.right", rotate: [-50, 80] }, 0) //右手晃动幅度
        .add({ targets: ".leg .left", rotate: [30, -60] }, 0) //左脚晃动幅度
        .add({ targets: ".leg .right", rotate: [-60, 30] }, 0); //右脚晃动幅度
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.person {
  transform-origin: 50% 100%;
  * {
    margin: 0 auto;
  }
  .head {
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }
  .body {
    width: 22px;
    height: 50px;
    border-radius: 20px;
    background: black;
    margin-top: 2px;
    position: relative;
    //手样式
    .hand {
      //肩膀
      position: absolute;
      width: 10px;
      height: 25px;
      left: calc(50% - 5px);
      top: 7px;
      border-radius: 10px;
      background: black;
      transform-origin: 50% 0;
      &::after {
        //手臂
        content: "";
        width: 10px;
        height: 25px;
        border-radius: 10px;
        background: black;
        position: absolute;
        bottom: 5px;
        left: -3px;
        transform-origin: 50% 100%;
        transform: rotate(130deg); //手臂弯曲幅度
      }
    }
    .hand.left {
      z-index: -1;
    }
  }
  .leg {
    width: 10px;
    position: relative;
    top: -10px;
    .left,
    .right {
      // 大腿
      width: 10px;
      height: 30px;
      background: black;
      border-radius: 10px;
      position: absolute;
      transform-origin: 50% 0;
      &::after {
        //小腿
        content: "";
        width: 10px;
        height: 30px;
        border-radius: 10px;
        background: black;
        position: absolute;
        bottom: 5px;
        left: 2px;
        transform-origin: 50% 100%;
        transform: rotate(-130deg); //小腿弯曲幅度
      }
    }
  }
}
</style>