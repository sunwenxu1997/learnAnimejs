<template>
  <div class="overall">
    <div class="vessel">
      <div class="box">
        <section :ref="`dot${index}`" class="box-dot" v-for="(i,index) in 100" :key="index">
          <span class="dot" v-for="(j,indexJ) in letterList" :key="indexJ" v-if="index == j"></span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      // A:[14, 15, 23, 24, 25, 26, 32, 33, 36, 37, 42, 47, 52, 57, 62, 63, 64, 65, 66, 67, 72, 77, 82, 87]
      letterList: [14, 15, 23, 24, 25, 26, 32, 33, 36, 37, 42, 47, 52, 57, 62, 63, 64, 65, 66, 67, 72, 77, 82, 87] //字母列表
    };
  },
  created() {},
  mounted(){
    anime({
        targets:'.box-dot',
        scale: [
        { value: 0, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ],
      delay: anime.stagger(200, { grid: [10, 10], from: "center" }), //grid 网格 [w , h] 宽高
      loop: false
    })
    anime({
        targets:'.dot',
        background:'#008080',
        delay:1000,
        loop: false
    })
  },
  methods: {}
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
  background: #f1f0f0;
}
.vessel {
  width: 100px;
}
.box {
  width: 100px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  background: #d4d4d4;
}
.box-dot {
  width: 10px;
  height: 10px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  background: #ffffff;
  .dot {
    display: block;
    width: 100%;
    height: 100%;
    background: white;
  }
}
</style>