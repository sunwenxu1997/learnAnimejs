<template>
  <div class="overall">
    <div class="box">
      <span class="dot" v-for="(i,index) in 100" :key="index"></span>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    anime
      .timeline({
        targets: ".dot",
        easing: "easeInOutSine",
        loop:true
      })
      .add({
        rotate: function(el, i, l) {
          return i * 3.6;
        },
         duration: 0,
      })
      .add({
        targets: ".dot",
        translateX: [{ value: 10 }, { value: 0 }],
        delay:function (el,i,l) {
            return i*100
        },
        opacity:[{value:1},{value:0.5}]
      });
    // anime({
    //     targets:'.dot',
    //     translateX:[
    //         {value:20},
    //         {value:0}
    //     ]
    // })
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