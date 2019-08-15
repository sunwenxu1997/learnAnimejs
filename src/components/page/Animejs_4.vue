<template>
  <div>
    <div class="animation-keyframes-demo"></div>
    <div class="property-keyframes-demo"></div>
    <div class="basic-staggering-demo" v-for="(i,index) in 6" :key="index"></div>
    <section class="box">
      <div class="staggering-grid-demo" v-for="(i,index) in 100" :key="index"></div>
    </section>
    <br />
    <br />
    <section class="box">
      <div class="staggering-axis-grid-demo" v-for="(i,index) in 100" :key="index"></div>
    </section>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //   1.动画关键帧
    anime({
      targets: ".animation-keyframes-demo",
      keyframes: [
        { translateY: -40 },
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 }
      ],
      duration: 4000,
      easing: "easeOutElastic(1, .3)", //自定义动画速率
      loop: false
    });
    // 2.属性关键帧
    anime({
      targets: ".property-keyframes-demo",
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -40, duration: 500 }, //1
        { value: 40, duration: 500, delay: 1000 }, //3
        { value: 0, duration: 500, delay: 1000 } //5
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" }, //2
        { value: 1, duration: 900 }, //3
        { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" }, //4
        { value: 1, duration: 900 } //5
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 }, //1
        { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" }, //2
        { value: 1, duration: 450 }, //3
        { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" }, //4
        { value: 1, duration: 450 } //5
      ],
      easing: "easeOutElastic(1, .8)",
      loop: true
    });

    //3.基础交错动画
    // anime.stagger(value, options) 操纵值 交错参数
    // anime.stagger([startValue, endValue]) 起始值 结束值
    anime({
      targets: ".basic-staggering-demo",
      translateX: 270,
      //   delay: anime.stagger(100,{start:500}),  // 延迟从500ms开始，然后每个元素增加100ms。。
      //   delay: anime.stagger(1000, { from: 'last' }), //每个元素增加1000ms,从中心位置开始 (last 从最后一个元素开始效果 / first 从第一个元素开始效果 / index 从指定的索引启动效果)
      delay: anime.stagger(1000, {
        direction: "reverse",
        easing: "easeOutQuad"
      }), //每个元素增加1000ms,从相反方向开始 和 from: 'last' 类似
      rotate: anime.stagger([-360, 360]), // 旋转将在-360deg到360deg之间均匀分布在所有元素之间
      loop: true
    });

    //    4.网格交错
    anime({
      targets: ".staggering-grid-demo",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ],
      delay: anime.stagger(200, { grid: [10, 10], from: "center" }), //grid 网格 [w , h] 宽高
      loop: true
    });

    //5.网格交错方向
    anime({
      targets: ".staggering-axis-grid-demo",
      translateX: anime.stagger(10, {
        grid: [10, 10],
        from: "center",
        axis: "x"
      }), //每个元素增加 10px，在10*10的网格内，从中心位置沿着x轴移动
      translateY: anime.stagger(10, {
        grid: [10, 10],
        from: "center",
        axis: "y"
      }),//每个元素增加 10px，在10*10的网格内，从中心位置沿着y轴移动
      rotateZ: anime.stagger([0, 90], {
        grid: [10, 10],
        from: "center",
        axis: "x"
      }),//旋转将在0deg到90deg之间均匀分布在所有元素之间,在10*10的网格内，从中心位置沿着x轴移动
      delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
      easing: "easeInOutQuad"
    });
  }
};
</script>

<style lang="scss" scoped>
.animation-keyframes-demo {
  width: 30px;
  height: 30px;
  background: khaki;
}
.property-keyframes-demo {
  width: 30px;
  height: 30px;
  background: #70a71d;
  border-radius: 50%;
}
.basic-staggering-demo {
  width: 20px;
  height: 20px;
  margin: 1px;
  background: green;
}
.box {
  max-width: 220px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .staggering-grid-demo {
    width: 20px;
    height: 20px;
    background: #38d3e7;
    margin: 1px;
  }
  .staggering-axis-grid-demo {
    width: 20px;
    height: 20px;
    background: #e7cd38;
    margin: 1px;
  }
}
</style>