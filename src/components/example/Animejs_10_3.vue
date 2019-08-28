<template>
  <div class="overall">
    <div class="box">
      <span
        class="dot"
        v-for="(i,index) in 100"
        :key="index"
        :style="`transform: rotate(${i*3.6}deg)`"
      ></span>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    let tl = anime.timeline({
      duration:100,
      complete: function() {
        tl.restart();
      }
    });
    function createEl(i) {
      let el = document.getElementsByClassName("dot")[i];
      tl.add({
        begin: function() {
          anime({
            targets: el,
            translateX: 25,
            opacity:1,
            scale: 1.3,
            easing: "easeInOutSine",
            direction: "alternate",
          });
        }
      });
    }
    for (let i = 0; i < 100; i++) createEl(i);
  }
};
</script>

<style lang="scss" scoped>
.overall {
  background: #292929;
}
.box {
  width: 200px;
  height: 200px;
  position: relative;
  .dot {
    display: inline-block;
    width: 50px;
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    bottom: 100px;
    transform-origin: 100px 0;
    opacity: 0.5;
    // transform: translateX()
  }
}
</style>