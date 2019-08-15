<template>
  <div>
    <div class="dir"></div>
    <br />
    <br />
    <div class="relative-values" ref="relative"></div>
    <br />
    <br />
    <br />
    <section>
      <div class="function-based-values-demo" :data-x="100*i" v-for="(i,index) in 4" :key="index"></div>
    </section>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //   1.方向和循环
    // anime({
    //   targets: ".dir",
    //   translateX: 250,
    //   easing: "easeInOutSine",
    //   direction: "reverse", //执行方向 normal 正方向动画/reverse 反方向动画/alternate 往返
    //   autoplay: true, //定义动画是否应自动启动。
    //   loop: 3 //循环次数
    // });

    //    2.相对数值
    let relativeEl = this.$refs["relative"];
    relativeEl.style.transform = "translateX(100px)"; //直接在css样式内定义无效
    anime({
      targets: ".relative-values",
      translateX: {
        value: "*=2.5", // 100px * 2.5 = '250px'
        duration: 1000
      },
      width: {
        value: "-=20px", // 28 - 20 = '8px'
        duration: 1800,
        easing: "easeInOutSine"
      },
      rotate: {
        value: "+=2turn", // 0 * 2 = '2turn'
        duration: 1800,
        easing: "easeInOutSine"
      },
      direction: "alternate"
    });

    // 3.函数返回值
    anime({
      targets: ".function-based-values-demo",
      translateX: function(el) {
        console.log(el.getAttribute("data-x")); //获取标签上绑定的 data-x 属性值
        return el.getAttribute("data-x");
      },
      translateY: function(el, i) {
        //第一个最下
        return 50 + -50 * i;
      },
      scale: function(el, i, l) {
        //第一个最大
        return l - i + 0.25;
      },
      rotate: function() {
        //随机数
        return anime.random(-360, 360);
      },
      borderRadius: function() {
        return ["50%", anime.random(10, 35) + "%"];
      },
      duration: function() {
        return anime.random(1200, 1800);
      },
      delay: function() {
        return anime.random(0, 400);
      },
      direction: "alternate",
      loop: false
    });
  }
};
</script>

<style lang="scss" scoped>
.dir {
  width: 30px;
  height: 30px;
  background: teal;
}
.relative-values {
  width: 40px;
  height: 40px;
  background: salmon;
  border-radius: 50%;
}
section {
  position: relative;
  .function-based-values-demo {
    width: 20px;
    height: 20px;
    background: #90d627;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>