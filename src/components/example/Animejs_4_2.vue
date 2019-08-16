<template>
  <div class="overall">
    <div id="box">
      <div
        class="box"
        v-for="(w,indexW) in 10"
        :key="indexW"
        :style="w%2!=1?`transform: translateZ(${5*w}px);`:`transform: translateZ(${-5*(w-1)}px);`"
      >
        <div
          class="box-t"
          :class="`box-t${w}`"
          v-for="(i,index) in 100"
          :style="`background: hsl(${170 + w*5}, 88%, 60%);`"
          :key="index"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    for (let i = 0; i < 11; i++) {
      anime({
        targets: `.box .box-t${i}`,
        scale: [
          { value: 0.1, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 600 }
        ],
        delay: anime.stagger(10*i, { grid: [10, 10], from: 0 }), //grid 网格 [w , h] 宽高
        loop: true
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
  background: #eeecec;
  perspective: 3000;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}
#box {
  transform-origin: 50% 50%;
    transform: rotateY(-5deg) rotateX(5deg);
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 2000;
  transform-style: preserve-3d;
  .box {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 0;
    top: 0;
     transform-style: preserve-3d;
     perspective: 2000;
    .box-t {
      width: 10px;
      height: 10px;
      opacity: 0.5;
    }
  }
}
</style>